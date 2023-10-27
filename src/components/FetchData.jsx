import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData({ cat }) {
  const [Data, SetData] = useState([]);

  const fetchData = async () => {
    try {
      let url;
      if (cat) {
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=f23da94471ee48e79eba96036936b30d`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f23da94471ee48e79eba96036936b30d`;
      }

      const response = await axios.get(url);
      SetData(response.data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h1 className="d-flex justify-content-center align-items-center">
        Top Stories
      </h1>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-2"
        style={{ minHeight: "100vh" }}
      >
        {Data.length > 0
          ? Data.map((items, index) => (
              <div
                className="container my-3"
                style={{
                  width: "700px",
                  boxShadow: "2px 2px 10px silver",
                  borderRadius: "10px",
                }}
              >
                <h3 className="my-2">{items.title}</h3>
                <div className="d-flex justify-content-center align-items-center">
                  {items.urlToImage && (
                    <img
                      src={items.urlToImage}
                      alt="/"
                      className="img-fluid"
                      style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <p className="my-1">{items.description}</p>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                  <a
                    className="btn btn-primary m-2"
                    href={items.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View More
                  </a>
                </div>
              </div>
            ))
          : "LOADING..."}
      </div>
    </div>
  );
}

export default FetchData;
