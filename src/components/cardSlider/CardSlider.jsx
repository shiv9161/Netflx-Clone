import React, { useEffect, useState } from "react";
import "../../App.css";

const CardGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("homeCard.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center m-3">
        <b>
          <u>TESTIMONIAL</u>
        </b>
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item) => (
          <div className="col" key={item.id}>
            <div className="card card-hover">
              {" "}
              {/* Added card-hover class */}
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  {item.para}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
