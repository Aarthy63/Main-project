const bcrypt = require('bcrypt');
const User = require('../model/schema')
var jwt = require('jsonwebtoken');
const { upload } = require('../multar/multar')
const path = require('path')
const { verifyToken } = require('../middleware/verifyToken')





exports.get = (req, res, next) => {
    try {
        User.find({})
            .then((data) => res.json({ data }))
            .catch((err) => res.json(err));
        // res.send({msg:"asdfasdf"})
    } catch (error) {
        console.log(error);
    }
}


exports.post = async (req, res) => {
    console.log(req.body);
    try {
        // console.log(req.body);
        const { firstName, lastName, email, username, password } = req.body;
        // Hashing the password
        // const hashedPassword = await bcrypt.hash(password, 10);
        // Note: Do not compare the password immediately after hashing
        // const isPasswordMatch = bcrypt.compareSync('user_password', hashedPassword);
        const newUser = new User({
            firstName,
            lastName,
            email,
            username,
            password // Save the hashed password to the database
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Registration failed", error: error.message });
    }
};

// exports.post = async (req, res) => {
//     console.log(req.body)
//     try {
//         const { firstName, email, password } = req.body;
//         const pwd = await bcrypt.hash(password, 10)
//         const newUser = new User({
//             firstName,
//             email,
//             password: pwd
//         });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(400).json({ message: 'Registration failed', error: error.message });
//     }
// }


exports.fetchuser = (req, res, next) => {
    try {
        User.find({})
            .then((data) => res.json({ data }))
            .catch((err) => res.json(err));
    } catch (error) {
        console.log(error);
    }
}

exports.getsingleuserById = (req, res, next) => {
    console.log(req.params.id);
    const userid = req.params.id;
    try {
        User.findOne({ _id: userid })
            .then((data) => res.json({ data }))
            .catch((err) => res.json(err));
    } catch (error) {
        console.log(error);
    }
}

exports.forgetPassword = async (req, res) => {
    try {
      const { email } = req.body;
  
      const emailExists = await User.findOne({ email: email });
  
      if (emailExists) {
        return res.status(200).json({ otp: "1234" });
      } else {
        return res.status(400).json({ msg: "Invalid Email" });
      }
    } catch (error) {
      res
        .status(400)
        .json({ message: "Registration failed", error: error.message });
    }
  };

exports.fetchuserById = (req, res) => {
    console.log(req.params.id);
    const userid = req.params.id;
    try {
        User.findOne({ _id: userid })
            .then((data) => res.json({ data }))
            .catch((err) => res.json(err));
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
        const { username} = req.body;
        const user = await User.findOne({ username });
        console.log(user);
        if (!user) {
            res.status(401).
            json({ message: 'Invalid email or password' });
        }
        // const passwordCheck = await bcrypt.compare(password, user.password);
        // console.log(passwordCheck);
        // if (!passwordCheck) {
        //     return res.status(401).
        //         json({ message: 'Invalid email or password' });;
        // }
        const token = jwt.sign({
            data: user._id
        }, 'aaraa', { expiresIn: '1hr' });
        res.status(200).json({ message: 'Login successfully..', user, token })
    }
//     // console.log(req.body);
//     try {
//       const { email, password } = req.body;

//       const user = await User.findOne({ email: email });

//       const comparePwd = await bcrypt.compare(password, user.password);

//       if (!user) {
//         res.status(400).json({ message: "Login failed", error: error.message });
//       } else if (!comparePwd) {
//         res.status(400).json({ message: "Login failed", error: error.message });
//       } else {
//         // res.json({user});

//         //secret Key
//         const secretKey = process.env.SECRET_KEY;
//         console.log(secretKey);

//         const token = jwt.sign(
//           {
//             data: user._id,
//           },
//           secretKey,
//           { expiresIn: "1h" }
//         );
//           res.status(201).json({ token, user, message: "login Success" });
//       }
//     } catch (error) {
//       res.status(400).json({ message: "Login failed", error: error.message });
//     }
//   };


exports.deleteuserById = (req, res, next) => {
    console.log(req.params.id);
    try {
        User.findOneAndDelete({ _id: req.params.id })
            .then((data) => res.json({ message: 'User deleted successfully' }))
            .catch((err) => res.status(404).json({ message: 'User not found' }));
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.updateById = async (req, res) => {
    // console.log(req.body)
    try {
        const { firstName, email } = req.body.data; // Remove _id as it's already in the route params
        const userId = req.params.id; // Get the user ID from route params
        const updatedUser = await User.findByIdAndUpdate(userId, {
            firstName: firstName,
            email: email,
        }, { new: true }); // Add { new: true } option to return the updated document

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(400).json({ message: "Request Failed", error: error.message });
    }
}

exports.getSingle = async (req, res) => {
    try {
        const token = req.headers.authorization;
        console.log(token);
        const tokenVerification = verifyToken(token);
        if (tokenVerification.error) {
         return res.status(401).json({ message: tokenVerification.error });
        }
        const { decoded } = tokenVerification;
       const userID = decoded.data;
        // console.log(decoded);
        const foundUser = await User.findOne({ _id: userID });
        if (!foundUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ data: foundUser });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error fetching user", error: error.message });
    }
};

