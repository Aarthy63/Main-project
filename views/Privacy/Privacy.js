import React, { Fragment } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import privacyBanner from '../../assets/images/privacyBanner.png';


 
 const DsbPages = (props) => {
  
    return (
      <Fragment>
        <Header />
        <div className="Main-section cmsSec">
            <div className="container container-1200">
                <div className="cmsBanner">
                    <img src={privacyBanner} />
                    <h3>Privacy Policy</h3>
                </div>
                <p>At OSIZ, accessible from OSIZ, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by OSIZ and how we use it.</p>
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in OSIZ. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                <h3>Information we collect</h3>
                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number</p>
                <h3>How we use your information</h3>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website </li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality </li>
                    <li>Provide, operate, and maintain our website Improve, personalize, and expand our website Understand and analyze how you use our website Develop new products, services, features, and functionality
                    Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>
                <h3>Log Files</h3>
                <p>OSIZ follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            </div>
        </div>
		<Footer />
      </Fragment>
    );
    
}

export default DsbPages;