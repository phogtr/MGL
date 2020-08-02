import React from "react";
import Pagination from "../Pagination";

const HomeItem = ({ data, page, setPage, pageArray }) => {
  const blockStyle = {
    padding: "10px",
    border: "1px solid #ccc",
  };

  return (
    <>
      {data.page.results.map((game) => (
        <div key={game.id} style={blockStyle}>
          <p>{game.name}</p>
          <p>{game.released}</p>
          <p>{game.rating}</p>
          <p>{game.reviews_count}</p>
        </div>
      ))}
      <Pagination page={page} setPage={setPage} pageArray={pageArray} />
    </>
  );
};

export default HomeItem;
