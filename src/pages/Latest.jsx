import React, { useEffect, useState } from "react";
// importing css
import "../App.css";

const Latest = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on search query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search functionality */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="text-start">Latest</p>
          </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search Latest"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      {filteredData.map((item) => {
        return (
          <div
            className="card latesCard"
            // style={{ width: "10rem" }}
          >
            <img
              src={item.image_url}
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

export default Latest;
