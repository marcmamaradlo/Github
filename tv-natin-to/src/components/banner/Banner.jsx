import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel";

const Banner = ({ data }) => {
  const context = useContext(MyContext);
  const state = context.state;
  // const screenWidth = window.screen.width;

  const carouselParams = {
    autoplay: false,
    autoplayInterval: 5000,
    pauseOnHover: true,
    swiping: true,
    wrapAround: true,
    speed: 1000,
    frameAriaLabel: "",
    animation: "",
  };

  const bannerImages = data.map((item, index) => {
    const dynamicBG =
      window.screen.width < 786
        ? `url(https://image.tmdb.org/t/p/original${item.poster_path})`
        : window.screen.width > 786
        ? `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        : null;

    const background = {
      backgroundImage: dynamicBG,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    return (
      <div key={index} className="banner" style={{ ...background }}>
        <div className="banner-content">
          <div className="banner-bg">
            <div className="banner-content-text">
              <div className="banner-content-title">
                <Link to={`/movie/${item.id}`}>
                  <p>{item.title} </p>
                  {/* <i className="fa-solid fa-arrow-up-right-from-square"></i> */}
                </Link>
              </div>
              <div className="banner-content-description">
                <p>{item.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Carousel
        {...carouselParams}
        renderCenterLeftControls={() => null}
        renderCenterRightControls={() => null}
      >
        {bannerImages}
      </Carousel>
    </>
  );
};

export default Banner;
