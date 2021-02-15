import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Filter.css";

const FilterForm = ({ setUrlName, pageArray, setPage, filter, setFilter }) => {
  const history = useHistory();
  const location = useLocation();
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const newFilter = (e) => {
    e.preventDefault();
    setPage(1);
    setUrlName(filter);
    setFilter("");
    for (let i = 0; i < 10; i++) {
      pageArray[i] = i + 1;
    }
    history.push(`/games/1/search=${filter}`);
  };

  return (
    <>
      <div
        className={classNames({
          row: location.pathname === "/",
          "": location.pathname !== "/",
        })}
      >
        <div
          className={classNames({
            "col-2": location.pathname === "/",
            "": location.pathname !== "/",
          })}
        ></div>
        <div
          className={classNames({
            "col-8": location.pathname === "/",
            "": location.pathname !== "/",
          })}
        >
          <div className="form-row">
            <div className="form-group col-md-8">
              <Link to="/games/1" className="btn btn-outline-info">
                Browse
              </Link>
            </div>
            <div className="form-group col-md-4">
              <form onSubmit={newFilter} className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={filter}
                  onChange={changeFilter}
                ></input>
                <div className="input-group-append">
                  <button className="form-control filter-icon" type="submit">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className={classNames({
            "col-2": location.pathname === "/",
            "": location.pathname !== "/",
          })}
        ></div>
      </div>
    </>
  );
};

export default FilterForm;
