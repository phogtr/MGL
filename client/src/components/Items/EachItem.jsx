import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import "./Items.css";

const EachItem = ({ name, count, data, page, setPage, pageArray, nameComps }) => {
  return (
    <>
      <div className="items-list">
        {data.map((game) => (
          <Link to={`/game/${game.id}/${game.name}`} key={game.id} className="items-block">
            <div>
              <img src={game.background_image} alt={`${game.name}`} className="content-img" />
            </div>
            <div className="item-info text-overflow">
              <span className="text-overflow">{game.name}</span>
              <div>{game.released}</div>
            </div>
            <div className="item-score">
              <span className="item-rating">{game.rating === 0 ? "" : game.rating}</span>
            </div>
          </Link>
        ))}
        <Pagination
          count={count}
          name={name}
          page={page}
          setPage={setPage}
          pageArray={pageArray}
          nameComps={nameComps}
        />
      </div>
    </>
  );
};

export default EachItem;
