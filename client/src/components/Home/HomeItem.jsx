import React from "react";
import Pagination from "../Pagination";
import "./Home.css";

const HomeItem = ({ data, page, setPage, pageArray }) => {
  return (
    <div className="items-list">
      {data.page.results.map((game) => (
        <a href="#" key={game.id} className="items-block">
          <div>
            <img src={game.background_image} alt={`${game.name}`} className="content-img" />
          </div>
          <div className="item-info text-overflow">
            <span className="text-overflow">{game.name}</span>
            <div>{game.released}</div>
          </div>
          <div className="item-score">
            <span className="item-rating">{game.rating}</span>
          </div>
        </a>
      ))}
      <Pagination page={page} setPage={setPage} pageArray={pageArray} />
    </div>
  );
};

export default HomeItem;
