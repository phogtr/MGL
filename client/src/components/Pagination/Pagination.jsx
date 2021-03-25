import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Pages.css";

const Pagination = ({ count, name, page, setPage, pageArray, nameComps }) => {
  let filterUrl = `search=${name}`;
  let maxPage = Math.round(Math.floor(count / 20)) + 1;
  if (maxPage < 10) {
    pageArray = [];
    for (let i = 0; i < maxPage; i++) {
      pageArray[i] = i + 1;
    }
  }
  let finalPage = maxPage - 4;
  let startFinalPage = maxPage - 9;

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
    } else if (p >= finalPage) {
      for (let i = 0; i < 10; i++) {
        pageArray[i] = startFinalPage;
        startFinalPage++;
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
            to={`/games/${nameComps === "released" ? "new/" : ""}${page - 1}/${
              name === undefined ? "" : filterUrl
            }`}
            className="arrow-pg page-link"
          >
            &larr;
          </Link>
        </li>
        {pageArray.map((p, idx) => (
          <li
            key={p}
            className={classNames({
              "page-item active": p === page,
              "page-item": p !== page,
              "hide-display":
                maxPage > 6 &&
                p !== page &&
                idx !== 0 &&
                idx !== 1 &&
                idx !== 9 &&
                idx !== 8 &&
                idx !== maxPage - 1 &&
                idx !== maxPage - 2,
              "dot-before": idx === 1 && maxPage > 6,
              "dot-after": p === page && idx > 1 && p < maxPage - 1 && maxPage > 6,
            })}
          >
            <Link
              onClick={() => onPage(p)}
              to={`/games/${nameComps === "released" ? "new/" : ""}${p}/${
                name === undefined ? "" : filterUrl
              }`}
              className="page-link"
            >
              {p}
              <span className="sr-only"></span>
            </Link>
          </li>
        ))}
        <li
          className={classNames({
            "page-item disabled": page === maxPage,
            "page-item": page >= 1,
          })}
        >
          <Link
            onClick={() => onPage(-1)}
            to={`/games/${nameComps === "released" ? "new/" : ""}${page + 1}/${
              name === undefined ? "" : filterUrl
            }`}
            className="arrow-pg page-link"
          >
            &rarr;
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
