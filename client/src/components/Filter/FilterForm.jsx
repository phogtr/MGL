import React from "react";
import { useHistory } from "react-router-dom";

const FilterForm = ({ setUrlName, pageArray, setPage, filter, setFilter }) => {
  const history = useHistory();

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
      <form onSubmit={newFilter} className="form-inline">
        <input
          value={filter}
          onChange={changeFilter}
          className="form-control"
          type="text"
          placeholder="Search..."
        ></input>
        <button type="submit">search icon</button>
      </form>
    </>
  );
};

export default FilterForm;
