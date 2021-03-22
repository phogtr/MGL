import React from "react";
import { Link } from "react-router-dom";
import "./Released.css";

const ReleasedReview = ({ data }) => {
  let sliceData = data.slice(1, 11);
  const indicators = [];
  for (var i = 1; i < 11; i++) {
    indicators.push(<li key={i} data-target="#releasedCarousel" data-slide-to={i}></li>);
  }

  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h3>Recent Released</h3>
          <div id="releasedCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#releasedCarousel" data-slide-to="0" className="active"></li>
              {indicators}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Link to={`/game/${data[0].id}/${data[0].name}`} key={data[0].id}>
                  <img
                    className="d-block w-100 rls-img"
                    src={data[0].background_image}
                    alt={`${data[0].name}`}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{data[0].name}</h5>
                  </div>
                </Link>
              </div>
              {sliceData.map((game) => (
                <div key={game.id} className="carousel-item">
                  <Link to={`/game/${game.id}/${game.name}`} key={game.id}>
                    <img
                      className="d-block w-100 rls-img"
                      src={game.background_image}
                      alt={`${game.name}`}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{game.name}</h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#releasedCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#releasedCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default ReleasedReview;
