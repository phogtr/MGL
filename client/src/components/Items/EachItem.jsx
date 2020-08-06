import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import "./Items.css";

const EachItem = ({ data, page, setPage, pageArray }) => {
  return (
    <div className="items-list">
      {data.page.results.map((game) => (
        <Link to={`/game/${game.id}/${game.name}`} key={game.id} className="items-block">
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
        </Link>
      ))}
      <Pagination page={page} setPage={setPage} pageArray={pageArray} />
    </div>
  );
};

export default EachItem;
