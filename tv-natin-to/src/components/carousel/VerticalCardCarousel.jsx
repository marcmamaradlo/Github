import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const VerticalCardCarousel = ({ header, data }) => {
  const displayData = () => {
    return data.map((item) =>
      // MOVIE COMPONENT //
      item.media_type === "movie" ? (
        <Link to={`/movie/${item.id}`} className="card-portrait" key={item.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
              alt={item.title}
            />
            <div className="card-title">
              <p>{item.title}</p>
            </div>
          </div>
        </Link>
      ) : /////////////////////
      // TV SHOW COMPONENT
      item.media_type === "tv" ? (
        <Link to={`/tv/${item.id}`} className="card-portrait" key={item.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
              alt={item.name}
            />
            <div className="card-title">
              <p>{item.name}</p>
            </div>
          </div>
        </Link>
      ) : /////////////////////
      // PERSON COMPONENT /
      item.media_type === "person" ? (
        <Link to={`/person/${item.id}`} className="card-portrait" key={item.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w154${item.profile_path}`}
              alt={item.name}
            />
            <div className="card-title">
              <p>{item.name}</p>
            </div>
          </div>
        </Link>
      ) : /////////////////////
      null
    );
  };

  const responsive = {
    xtraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1025 },
      items: 9,
    },
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1024, min: 768 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 768, min: 550 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 550, min: 470 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 470, min: 320 },
      items: 2,
    },
  };
  return (
    <div className="carousel-container">
      <h2>{header}</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {displayData()}
      </Carousel>
    </div>
  );
};

export default VerticalCardCarousel;
