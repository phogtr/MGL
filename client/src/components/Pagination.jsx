import React from "react";
import classNames from "classnames";

const Pagination = ({ page, setPage, pageArray }) => {
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
        <li className="page-item">
          <a onClick={() => onPage(-2)} href="#" className="page-link">
            Previous
          </a>
        </li>
        {pageArray.map((p) => (
          // p === page ? (
          //   <li key={p} className="page-item active">
          //     <a onClick={() => onPage(p)} href="#" className="page-link">
          //       {p}
          //       <span className="sr-only"></span>
          //     </a>
          //   </li>
          // ) : (
          //   <li key={p} className="page-item">
          //     <a onClick={() => onPage(p)} href="#" className="page-link">
          //       {p}
          //     </a>
          //   </li>
          // )
          <li
            key={p}
            className={classNames({
              "page-item active": p === page,
              "page-item": p !== page,
            })}
          >
            <a onClick={() => onPage(p)} href="#" className="page-link">
              {p}
              <span className="sr-only"></span>
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={() => onPage(-1)} href="#" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
