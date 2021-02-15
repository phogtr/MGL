import React from "react";

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
                <img className="d-block w-100" src={data[0].background_image} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{data[0].name}</h5>
                </div>
              </div>
              {sliceData.map((game) => (
                <div key={game.id} className="carousel-item">
                  <img className="d-block w-100" src={game.background_image} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{game.name}</h5>
                  </div>
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
