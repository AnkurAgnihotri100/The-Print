import React from "react";
import "../Styles/footer.css";

function Foter() {
  return (
    <div className="footer">
      <div className="container-fluid  d-flex flex-row align-items-center text-white p-3">
        <div className="contact-us flex-grow-1 d-flex flex-column justify-content-center">
          <h5>Contact Us</h5>
          <form style={{ width: "400px", height: "360px" }}>
            <div className="form-group m-2">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="exampleFormControlInput2">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="google-map flex-grow-1 d-flex flex-column justify-content-center">
          <h5>Our Location</h5>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14313.504795481593!2d78.1648405665591!3d26.249451155475626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1698405443519!5m2!1sen!2sin"
              width="400px"
              height="350px"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="developed-by flex-grow-1 align-self-center">
        <h5>
          Developed by <i>Ankur Agnihotri</i>
        </h5>
      </div>
      <div className="developed-by flex-grow-1 align-self-center">
        <p>Copyright &copy; 2023 Ankur Agniohtri All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Foter;
