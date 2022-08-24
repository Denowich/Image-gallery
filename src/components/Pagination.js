import React from "react";

const Pagination = ({ pageCount, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage !== pageCount) setCurrentPage(currentPage + 1);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a onClick={prevPage} className="btn btn-success my-3" href="!#">
            Prev
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${
              currentPage === pgNumber ? "active" : null
            }`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link my-3"
              href="!#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={nextPage} className="btn btn-success my-3" href="!#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
