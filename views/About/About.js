import React, { Fragment } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import termsBanner from '../../assets/images/termsBanner.png';


 
 const About = (props) => {
  
    return (
      <Fragment>
        <Header />
        <div className="Main-section cmsSec">
            <div className="container container-1200">
                <div className="cmsBanner">
                    <img src={termsBanner} />
                    <h3>About US</h3>
                </div>
                <p>Welcome to OSIZ!</p>
                <p>These terms and conditions outline the rules and regulations for the use of OSIZ's Website, located at OSIZ.</p>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use OSIZ if you do not agree to take all of the terms and conditions stated on this page.</p>
                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of af. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                <h3>Cookies</h3>
                <p>We employ the use of cookies. By accessing OSIZ, you agreed to use cookies in agreement with the OSIZ's Privacy Policy.</p>
                <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                <h3>License</h3>
                <p>Unless otherwise stated, OSIZ and/or its licensors own the intellectual property rights for all material on OSIZ. All intellectual property rights are reserved. You may access this from OSIZ for your own personal use subjected to restrictions set in these terms and conditions.</p>
                <p>You must not:</p>
                <ul>
                    <li>Republish material from OSIZ</li>
                    <li>Sell, rent or sub-license material from OSIZ </li>
                    <li>Reproduce, duplicate or copy material from OSIZ </li>
                    <li>Redistribute content from OSIZ </li>
                </ul>
                <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms and Conditions Generator.</p>
                <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. OSIZ does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of OSIZ,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, OSIZ shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                <p>OSIZ reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
            </div>
        </div>
		<Footer />
      </Fragment>
    );
    
}

export default About;