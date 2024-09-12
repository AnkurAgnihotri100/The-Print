// import React from 'react'
// import "../Styles/Login.css";


// function Login() {
//   return (
//     <div className="center-container">
//       <div className="login-container">
//         <form action="#">
//           <div className="title">
//             Log<span>IN</span>
//           </div>
//           <div className="input-box">
//             <input type="text" placeholder="Enter Your E-mail" required />
//             <div className="underline"></div>
//           </div>
//           <div className="input-box">
//             <input type="password" placeholder="Enter Your Password" required />
//             <div className="underline"></div>
//           </div>
//           <div className="input-box button">
//             <input type="submit" value="Continue" />
//           </div>
//         </form>

//         <div className="option">Or Connect with social Media</div>
//         <div className="twitter">
//           <a href="#">
//             <i className="fa-brands fa-twitter"> Log in with Twitter</i>
//           </a>
//         </div>
//         <div className="facebook">
//           <a href="#">
//             <i className="fa-brands fa-facebook"> Log in with Facebook</i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

















import React, { useState } from "react";
import "../Styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful!", data);
        // Store the token in localStorage or sessionStorage
        localStorage.setItem("token", data.token);
        // Redirect user to dashboard or another page
        window.location.href = "/dashboard"; // Replace with the route you want
      } else {
        console.error("Login failed:", data.msg);
        alert(data.msg); // Show the error to the user
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="center-container">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="title">
            Log<span>IN</span>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
