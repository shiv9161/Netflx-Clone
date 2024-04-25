import React, { useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Pagination from "../components/pagination/Pagination";

const TvShows = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items to display per page

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("movies.json", {
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
    setCurrentPage(1); // Reset page to 1 when search query changes
  };

  // Filter data based on search query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Search functionality */}
      <div className="container mt-3">
        <div className="row">
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
      <div className="container mt-3">
        <div className="row">
          {currentItems.map((item) => (
            <div className="col-lg-2 col-md-4 mb-4 col-6" key={item.id}>
              <div className="card latestCard">
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
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="container mt-3">
        <div className="row">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredData.length / itemsPerPage)}
            paginate={paginate}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TvShows;
