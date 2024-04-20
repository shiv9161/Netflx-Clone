import React, { useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Pagination from "../components/pagination/Pagination";

const TvShows = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
            <Pagination />
          </div>
          <div style={{ width: "270px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Shows"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {/* Render filtered data */}
      {filteredData.map((item) => {
        return (
          <div className="card latestCard" key={item.id}>
            <img
              src={item.image}
              className="card-img-top cardLatest-img"
              alt="latestImage"
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                {item.title.slice(0, 15)}
              </h5>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default TvShows;
