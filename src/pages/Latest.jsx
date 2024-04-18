import React, { useEffect, useState } from "react";

const Latest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("data.json", {
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
            className="card"
            style={{ width: "10rem", display: "inline-block" }}
          >
            <img
              src={item.image_url}
              style={{ width: "100%" }}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Latest;
