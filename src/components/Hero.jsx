import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid bg-warning text-white d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 style={{ fontSize: "45px", color: "orangered" }}>
        Explore, Discover, and Stay Informed
      </h1>
      <h5 style={{fontWeight:"400" , fontSize:"25px"}}>The Website is made with news API</h5>
      <p className="text-center " style={{width:"50vh", fontSize:"20px"}}>
        Welcome to The Print, your gateway to a world of knowledge and
        information. With our news API, we bring you the latest news and updates
        from a wide range of topics, from global affairs to tech innovations and
        beyond.
      </p>
      <p className="text-center " style={{width:"50vh", fontSize:"20px"}}>
        Empower yourself with insights, stay up-to-date, and broaden your
        horizons. Join our community of curious minds and embark on a journey of
        inspiration, exploration, and discovery.
      </p>
    </div>
  );
}

export default Hero;
