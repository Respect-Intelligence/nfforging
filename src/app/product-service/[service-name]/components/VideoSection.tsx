import React from "react";

function VideoSection() {
  return (
    <>
      <div className="text__block">
        <h5 className="text__block-title">How It Works?!</h5>
        <p className="text__block-desc">
          We have more than twenty years of experience...
        </p>
      </div>

      <div className="video-banner">
        <img src="assets/images/banners/5.jpg" alt="banner" />
        <a
          className="video__btn video__btn-white popup-video"
          href="https://www.youtube.com/watch?v=nrJtHemSPW4"
        >
          <div className="video__player">
            <span className="video__player-animation"></span>
            <span className="video__player-animation video__player-animation-2"></span>
            <i className="fa fa-play"></i>
          </div>
          <span className="video__btn-title color-white">Watch Our Video!</span>
        </a>
      </div>
    </>
  );
}

export default VideoSection;
