import React from "react";
import "./Games.css"

const GameInfo = ({ data }) => {
  let updatedDate = new Date(data.updated)
  let releasedDate = new Date(data.released)
  updatedDate = updatedDate.toLocaleString()
  updatedDate = updatedDate.substring(0, updatedDate.indexOf(","))
  releasedDate = releasedDate.toLocaleString()
  releasedDate = releasedDate.substring(0, releasedDate.indexOf(","))

  return (
    <>
      <h3 className="padding-bottom">{data.name}</h3>
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="padding-bottom">
            <img className="img-fluid" src={data.background_image} alt={`${data.name}`}/>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <video className="embed-responsive-item" controls>
              <source src={data.clip.clip} type="video/mp4" />
            </video>
            {/* <iframe className="embed-responsive-item" src={data.clip.clip} allowfullscreen></iframe> */}
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="info-box">
            <div>
              <b>Genres:</b> {data.genres.map((g, idx) => (
                <span key={g.name}>{(idx ? ", " : "") + g.name}</span>
              ))}
            </div>
            <div>
              <b>Platforms:</b> {data.platforms.map((p, idx) => 
                <span key={p.platform.name}>{(idx ? ", " : "") + p.platform.name}</span>
              )}
            </div>
            <div>
              <b>Released:</b> {releasedDate}
            </div>
            <div>
              <b>Rating:</b> {data.rating}
            </div>
            <div>
              <b>Review count:</b> {data.reviews_count}
            </div>
            <div className="text-overflow">
              <b>Official Website:</b> <a className="link-text" href={data.website}>{data.website}</a>
            </div>
            {data.reddit_url !== "" &&
              <div className="text-overflow">
                <b>Reddit:</b> <a className="link-text" href={data.reddit_url}>{data.reddit_url}</a>
              </div>
            }
            <div>
              <b>Developers:</b> {data.developers.map((d, idx) => (
                <span key={d.name}>{(idx ? ", " : "") + d.name}</span>
              ))}
            </div>
            <div>
              <b>Publishers:</b> {data.publishers.map((p, idx) => 
                <span key={p.name}>{(idx ? ", " : "") + p.name}</span>
              )}
            </div>
            <div>
              <b>Updated:</b> {updatedDate}
            </div>
          </div>
        </div>
      </div>
      <p className="desc">
        <i>{data.description_raw}</i>
      </p>
    </>
  );
};

export default GameInfo;
