import { useEffect, useState } from "react";

const Banner = ({ poster, backdrop, media_type, title }) => {
  useEffect(() => {}, []);

  const [bannerData, serBannerData] = useState([]);

  const bannerImage = () => {
    // const dynamicBG =
    //   poster && backdrop
    //     ? window.screen.width < 786
    //       ? `url(https://image.tmdb.org/t/p/original${poster})`
    //       : window.screen.width > 786
    //       ? `url(https://image.tmdb.org/t/p/original${backdrop})`
    //       : null
    //     : null;

    const background = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    return (
      <div className="banner-params" style={{ ...background }}>
        <div className="banner-content">
          {/* <div className="banner-bg"> */}
          {/* <div className="banner-params-poster-container">
            <img src={`https://image.tmdb.org/t/p/w92${poster}`} alt={title} />
          </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  };

  return <>{bannerImage()}</>;
};

export default Banner;
