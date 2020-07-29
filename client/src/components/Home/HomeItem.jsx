import React from "react";
import Pagination from "../Pagination";

const HomeItem = ({ data, page, setPage, pageArray }) => {
  return (
    <>
      {data.page.results.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
      <Pagination page={page} setPage={setPage} pageArray={pageArray} />
    </>
  );
};

export default HomeItem;
