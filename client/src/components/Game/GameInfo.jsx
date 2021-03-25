import React from "react";
import "./Games.css";

const GameInfo = ({ data }) => {
  const playStationArr = [
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
  ];
  const xboxArr = ["Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox"];
  let updatedDate = new Date(data.updated);
  let releasedDate = new Date(data.released);
  updatedDate = updatedDate.toLocaleString();
  updatedDate = updatedDate.substring(0, updatedDate.indexOf(","));
  releasedDate = releasedDate.toLocaleString();
  releasedDate = releasedDate.substring(0, releasedDate.indexOf(","));

  return (
    <>
      <h3 className="text-color padding-bottom">{data.name}</h3>
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="img-box">
            <img className="img-fluid" src={data.background_image} alt={`${data.name}`} />
          </div>
          {data.clip !== null && (
            <div className="embed-responsive embed-responsive-16by9">
              <video className="embed-responsive-item" controls>
                <source src={data.clip.clip} type="video/mp4" />
              </video>
              {/* <iframe className="embed-responsive-item" src={data.clip.clip} allowfullscreen></iframe> */}
            </div>
          )}
        </div>
        <div className="col-12 col-md-7">
          <div className="info-box">
            <div>
              <b className="heading-text">Genres:</b>{" "}
              {data.genres.map((g, idx) => (
                <span className="text-color" key={g.name}>
                  {(idx ? ", " : "") + g.name}
                </span>
              ))}
            </div>
            <div>
              <b className="heading-text">Platforms:</b>{" "}
              {data.platforms.map((p, idx) => (
                <span className="text-color" key={p.platform.name}>
                  {(idx ? ", " : "") + p.platform.name}{" "}
                  {p.platform.name === "PC" ? <i className="fab fa-windows"></i> : <></>}
                  {p.platform.name === "macOS" || p.platform.name === "iOS" ? (
                    <i className="fab fa-apple"></i>
                  ) : (
                    <></>
                  )}
                  {p.platform.name === "Linux" ? <i className="fab fa-linux"></i> : <></>}
                  {p.platform.name === "Android" ? <i className="fab fa-android"></i> : <></>}
                  {playStationArr.includes(p.platform.name) ? (
                    <i className="fab fa-playstation"></i>
                  ) : (
                    <></>
                  )}
                  {xboxArr.includes(p.platform.name) ? <i className="fab fa-xbox"></i> : <></>}
                </span>
              ))}
            </div>
            <div>
              <b className="heading-text">Released:</b>{" "}
              <span className="text-color">
                {releasedDate} <i className="far fa-calendar-alt"></i>
              </span>
            </div>
            <div>
              <b className="heading-text">Rating:</b>{" "}
              <span className="text-color">
                {data.rating} <i className="fas fa-star"></i>
              </span>
            </div>
            <div>
              <b className="heading-text">Review count:</b>{" "}
              <span className="text-color">{data.reviews_count}</span>
            </div>
            {data.website !== "" && (
              <div className="text-overflow">
                <b className="heading-text">Official Website:</b>{" "}
                <a className="link-text" href={data.website}>
                  {data.website}
                </a>{" "}
                <i className="text-color fas fa-home"></i>
              </div>
            )}
            {data.reddit_url !== "" && (
              <div className="text-overflow">
                <b className="heading-text">Reddit:</b>{" "}
                <a className="link-text" href={data.reddit_url}>
                  {data.reddit_url}
                </a>{" "}
                <i className="text-color fab fa-reddit"></i>
              </div>
            )}
            <div>
              <b className="heading-text">Developers:</b>{" "}
              {data.developers.map((d, idx) => (
                <span className="text-color" key={d.name}>
                  {(idx ? ", " : "") + d.name}
                </span>
              ))}
            </div>
            <div>
              <b className="heading-text">Publishers:</b>{" "}
              {data.publishers.map((p, idx) => (
                <span className="text-color" key={p.name}>
                  {(idx ? ", " : "") + p.name}
                </span>
              ))}
            </div>
            <div>
              <b className="heading-text">Last Modified:</b>{" "}
              <span className="text-color">
                {updatedDate} <i className="far fa-calendar-check"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-color desc">
        <i>{data.description_raw}</i>
      </p>
    </>
  );
};

export default GameInfo;
