import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Pages.css"

const Pagination = ({ name, page, setPage, pageArray }) => {
  let filterUrl = `/search=${name}`;

  const onPage = (p) => {
    if (p === -2) {
      p = page - 1;
    } else if (p === -1) {
      p = page + 1;
    }

    setPage(p);
    if (p < 7) {
      for (let i = 0; i < 10; i++) {
        pageArray[i] = i + 1;
      }
    } else {
      let temp = 5;
      for (let i = 0; i < 5; i++) {
        pageArray[i] = p - temp;
        temp--;
      }
      temp = 0;
      for (let i = 5; i < 10; i++) {
        pageArray[i] = p + temp;
        temp++;
      }
    }
  };
  return (
    <nav>
      <ul className="pagination">
        <li
          className={classNames({
            "page-item disabled": page === 1,
            "page-item": page > 1,
          })}
        >
          <Link
            onClick={() => onPage(-2)}
            to={`/games/${page - 1}${name === undefined ? "" : filterUrl}`}
            className="page-link"
          >
            Previous
          </Link>
        </li>
        {pageArray.map((p) => (
          <li
            key={p}
            className={classNames({
              "page-item active": p === page,
              "page-item": p !== page,
            })}
          >
            <Link
              onClick={() => onPage(p)}
              to={`/games/${p}${name === undefined ? "" : filterUrl}`}
              className="page-link"
            >
              {p}
              <span className="sr-only"></span>
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link
            onClick={() => onPage(-1)}
            to={`/games/${page + 1}${name === undefined ? "" : filterUrl}`}
            className="page-link"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
