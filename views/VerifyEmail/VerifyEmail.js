import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import termsBanner from '../../assets/images/termsBanner.png';
import logo from '../../assets/images/logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
 
 const VerifyEmail = (props) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const schema = yup
    .object({
        Username: yup.string()
        .matches(/^[a-zA-Z ]*$/, "Name should be in alphabets")
        .required("Username is required")
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name should not exceed 20 characters")
        .trim(),
      password: yup.string()
        .min(7, "Password must be at least 7 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Minimum eight characters, at least one uppercase, one lowercase, one number and one special character"
        )
        .required("Password is required")
    })
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  // handleSubmit data
  const onSubmit = async (data) => {
    console.log(data);
    try {
        toast.success("successfuly login!");
      // console.log("working", data);
    //   const response = await addUser (data);
    //   console.log(response);
    //   const userid = response.data.user._id
    //   console.log(response.data.token,"hygfyutgfyu");
    //   const token = response.data.token
    //   localStorage.setItem("token", token)
    //   localStorage.setItem("loggedInUser", JSON.stringify(response.data.user._id))
    //   console.log(response.data.user._id);
    //   console.log(userid);
      setTimeout(() => {
        navigate('/otp')
       }, 2000)
             
    } catch (error) {
      toast.error("Invalid email or password");
      console.error("login failed", error);
    }
    resetField("password");
    resetField("email");

  };
    return (
      <Fragment>
        <Header />
        <div className="Main-section cmsSec" style={{paddingTop:'80px'}}>
            <div className="container container-1200">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="LgnPg">
                            <img src={logo} className="img-fluid d-block mx-auto"/>
                            <h3>LOGIN</h3>
                            <form className="p-5 rounded h-100 mb-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                 type="Username"
                               className="form-control"
                                  name="Username"
                                   {...register('Username')} />
                               <div className="text-danger">{errors.Username?.message}</div>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                 type="password"
                                className="form-control"
                                 name="password"
                               {...register('password')}
                               />
                            <div className="text-danger">{errors.password?.message}</div>
                            </div>
                            <a href="#">Forgot Password</a>
                            <button className="btn LGn-btn">Login</button>
                            <p>Don’t have an account?<a href="/register" className="ml-2" >Register</a></p>
                            </form>
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
		<Footer />
      </Fragment>
    );
    
    }

export default VerifyEmail;