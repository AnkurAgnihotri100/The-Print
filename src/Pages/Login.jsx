import React from 'react'
import "../Styles/Login.css";


function Login() {
  return (
    <div className="center-container">
      <div className="login-container">
        <form action="#">
          <div className="title">
            Log<span>IN</span>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter Your E-mail" required />
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Enter Your Password" required />
            <div className="underline"></div>
          </div>
          <div className="input-box button">
            <input type="submit" value="Continue" />
          </div>
        </form>

        <div className="option">Or Connect with social Media</div>
        <div className="twitter">
          <a href="#">
            <i className="fa-brands fa-twitter"> Log in with Twitter</i>
          </a>
        </div>
        <div className="facebook">
          <a href="#">
            <i className="fa-brands fa-facebook"> Log in with Facebook</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
