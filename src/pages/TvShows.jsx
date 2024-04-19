import React, { useEffect, useState } from "react";
import "../App.css";

const TvShows = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("tvShows.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // console.log(data, "data")
        setData(myJson);
      });
  };
  return (
    <>
      <p className="h2">
        <b>List Movies</b>
      </p>
      {data.map((item) => {
        return (
          <div
            className="card latesCard"
            // style={{ width: "10rem" }}
          >
            <img
              src={item.image}
              // style={{ width: "100%" }}
              className="card-img-top cardLatest-img"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{item.title}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TvShows;
