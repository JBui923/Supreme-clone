import React from "react";
import Header from "./Header";
import NavLower from "./NavLower";


const Privacy = (props) => {

    return (
        <>
            <Header/>
            <div className="privacy__main">
                <div className="privacy__main-container">
                    <p className="privacy__heading">Privacy Policy</p>
                    <p>Welcome To Supreme.</p>
                    <p className="privacy__heading">Who We Are</p>
                    <p>"We" are Supreme, a company founded in New York City in 1994. We offer Supreme products online 
                        and through retail stores around the world. Supreme is the sole owner of this website, 
                        www.Supremenewyork.com (the "Site"), the Supreme mobile app, ("the App")and the services 
                        available through them (collectively, the Site, the App, and the services available through them are the "Services").</p>
                    <p className="privacy__heading">What This Policy Covers</p>
                    <p>Our Site and App;</p>
                    <p>Supreme has an active and vibrant community who buy and discuss our products and our drops. As 
                        part of this community, you should be aware that Supreme sells authorized Supreme products only 
                        through its official Site, App and retail stores. Other venues, online or offline, that 
                        reference Supreme products are not affiliated with or controlled by Supreme and we do not control their activities.</p>
                    <p className="privacy__heading">Changes to This Privacy Policy</p>
                    <p>We reserve the right to update the practices described in this Privacy Policy at any time. 
                        Please check here periodically. If we make any material changes, we will notify you as required by law.</p>
                    <p className="privacy__heading">Security</p>
                    <p>We take steps to protect information that identifies you using physical, technical and 
                        administrative security measures to reduce the risk of loss, misuse, unauthorized access, 
                        disclosure and alteration. While we work to keep information secure, we cannot warrant or 
                        guarantee its security. You remain responsible for the security of information you transmit to us over the Internet.</p>
                    <p className="privacy__heading">Children</p>
                    <p>Our Services are intended for general audiences and are not targeted to children under the age 
                        of 13. If we become aware that we have collected personal information (as defined by the 
                        Children's Online Privacy Protection Act) from children under the age of 13, we will take reasonable steps to delete it as soon as practicable.</p>
                    <p className="privacy__heading">For research and analytics</p>
                    <p> We will use your information to analyze how you view our products and to evaluate individual and collective use of our Service and interest in our products.</p>
                </div>
            </div>
            <NavLower />
        </>
    );
};

export default Privacy;