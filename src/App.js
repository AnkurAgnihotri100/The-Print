import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/Header/NavBar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchData from "./components/Data/FetchData";
import Foter from "./components/Footer/Foter";
import HeaderSection from "./components/Header/HeaderSection";
import Hero from "./components/Hero/Hero";
import Login from "./Pages/Login";


const App = () => {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission()
        .then(permission => {
          if (permission !== "granted") {
            toast.error("Notification permission denied");
          }
        })
        .catch(error => {
          console.error("Error requesting notification permission:", error);
        });
    }
  }, []);

  // Function to send notifications
  const sendNotification = (title, options) => {
    if (Notification.permission === "granted") {
      const notification = new Notification(title, options);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission()
        .then(permission => {
          if (permission === "granted") {
            sendNotification(title, options);
          } else {
            // Notify the user if they deny permission
            toast.error("Notification permission denied");
          }
        });
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        margin: "10px auto",
        maxWidth: "1500px",
        boxShadow: "2px 5px 10px silver",
      }}
    >
      <Router>
        <NavBar />
        <HeaderSection />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<Hero />} />
          <Route exact path="/Login" element={<Login />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
          <Route path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
          <Route path="/science" element={<FetchData cat="sceince" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/Health" element={<FetchData cat="Health" />} />
        </Routes>
        <Foter />
        {/* <ToastContainer position="upper-center" autoClose={3000} /> */}
      </Router>
    </div>
  );
};

export default App;
