import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
