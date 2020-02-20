// React
import React from "react";

// CSS
import "./Paginate.css";

const Paginate = props => {
  const { setActualPage, resultsCount, resultsPerPage } = props.states;

  const swapTable = [];
  for (let i = 0; i * resultsPerPage <= resultsCount; i++) {
    const pageNumber = i + 1;
    swapTable.push(
      <li key={pageNumber}>
        <button
          onClick={() => {
            setActualPage(pageNumber);
          }}
        >
          {pageNumber}
        </button>
      </li>
    );
  }

  return <ul className="paginate">{swapTable}</ul>;
};

export default Paginate;
