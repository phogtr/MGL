import React from "react";

const GameInfo = ({ data }) => {
  return (
    <div>
      <h3>Game Title</h3>
      <ul>
        <li>{data.name}</li>
        <li>{data.released}</li>
        <li>{data.rating}</li>
        <li>{data.reviews_count}</li>
        <li>{data.updated}</li>
      </ul>
      <div>{data.alternative_names}</div>
      {data.developers.map((d) => (
        <div key={d.name}>{d.name}</div>
      ))}
      {data.genres.map((g) => (
        <div key={g.name}>{g.name}</div>
      ))}
      <div>
        <img src={data.background_image} alt={`${data.name}`} height="100" width="390" />
      </div>
    </div>
  );
};

export default GameInfo;
