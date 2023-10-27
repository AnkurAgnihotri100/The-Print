import React, { useState } from "react";
// import { auth } from "../firebase";
import "../Styles/register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    // try {
    //   await auth.createUserWithEmailAndPassword(email, password);
    //   alert("Registration successful");
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Register;
