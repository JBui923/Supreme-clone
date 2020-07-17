import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "./Header";
import { login } from "../actions/sessionActions";
// import { closeModal } from "../actions/modalActions";

const Login = props => {
    const [Loginemail, setLoginEmail] = useState("");
    const [Loginpassword, setLoginPassword] = useState("");

    const updateEmail = (event) => setLoginEmail(event.target.value);
    const updatePassword = (event) => setLoginPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.login(Loginemail, Loginpassword);
        props.closeModal();
        // window.location.reload();
    };

    const handleDemoUser = async (event) => {
        event.preventDefault();
        await props.login("demouser@demouser.com", "demouser");
        props.closeModal();
        // window.location.reload();
    }

    return (
        <>
            <Header />
            <div className="login__header">login</div>
            <form className="form__container">
                <input type="email" onChange={updateEmail} className="form__input" value={Loginemail} placeholder="Email address" />
                <input type="password" onChange={updatePassword} className="form__input" value={Loginpassword} placeholder="Password" />
                <button className="form__button" onClick={handleSubmit}>Log In</button>
                <button className="demo__button" onClick={handleDemoUser}>Demo User</button>
                <Link to="/Signup" className="signup__link">sign up</Link>
            </form>
        </>
    );
}

// const mapDispatchToProps = dispatch => {
//     return {
//         login: (email, password) => dispatch(login(email, password)),
//         closeModal: () => dispatch(closeModal())
//     }
// }

export default connect(
    null,
    // mapDispatchToProps
)(
    Login
);