import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ButtonSecondary, ButtonPrimary } from "../buttons/Buttons";
import { MyContext } from "../../context";
import BannerParams from "../banner/BannerParams";
import axios from "axios";

const MovieParams = () => {
  useEffect(() => {
    getMovieData();
  }, []);

  const params = useParams();
  const [data, setData] = useState([]);
  const context = useContext(MyContext);
  // const handleExtraDetailsButton = context.handleExtraDetailsButton;
  // const extraDetailsButton = context.state.extraDetailsButton;

  console.log(data);

  async function getMovieData() {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=0b6d2ddf9c5e096294fa3534fb357915&language=en-US&append_to_response=videos,credits,images,keywords,release_dates`
    );
    setData(movie.data);
  }

  const showBanner = () => {
    return data.backdrop_path && data.poster_path ? (
      <BannerParams
        media_type={`movie`}
        backdrop={data.backdrop_path}
        poster={data.poster_path}
        title={data.title}
      />
    ) : null;
  };

  const language = data.spoken_languages
    ? data.spoken_languages.map((item) => (
        <p key={item.name} className="page-info-item-details">
          {item.english_name ? item.english_name : item.name},
        </p>
      ))
    : null;

  const genre = data.genres
    ? data.genres.map((item) => (
        <Link to={`/search/${item.id}`} key={item.id}>
          {item.name},
        </Link>
      ))
    : null;

  const cast = data.credits
    ? data.credits.cast.slice(0, 5).map((item) => (
        <Link to={`/person/${item.id}`} key={item.id}>
          {item.name},
        </Link>
      ))
    : null;

  const tag = data.keywords
    ? data.keywords.keywords.slice(0, 5).map((item) => (
        <Link to={`/search/${item.id}`} key={item.id}>
          {item.name},
        </Link>
      ))
    : null;

  const year = data.release_date ? data.release_date.split("-")[0] : null;

  const tagline = data.tagline ? data.tagline : null;

  const director = data.credits
    ? data.credits.crew.filter((item) => item.job === "Director")[0].name
    : null;

  const producer = data.credits
    ? data.credits.crew.filter(
        (item) => item.job === "Executive Producer" || "Producer"
      )[0].name
    : null;

  const writer = data.credits
    ? data.credits.crew.filter((item) => item.job === "Writer" || "Story")[0]
        .name
    : null;

  const showCast = () => {
    return data.credits
      ? data.credits.cast.slice(0, 10).map((item) => (
          <Link to={`/person/${item.id}`} key={item.id}>
            <div className="page-cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          </Link>
        ))
      : null;
  };

  // const director = () => {
  //   let vipCrew = [];
  //   if (data.credits) {
  //     const director = data.credits.crew.filter(
  //       (item) => item.job === "Director"
  //     )[0].name;
  //     vipCrew.push({ Director: director });
  //     const producer = data.credits.crew.filter(
  //       (item) => item.job === "Producer"
  //     )[0].name;
  //     vipCrew.push({ Producer: producer });
  //     const writer = data.credits.crew.filter(
  //       (item) => item.job === "Writer"
  //     )[0].name;
  //     vipCrew.push({ Writer: writer });
  //   }

  //   return vipCrew.map((item) => (
  //     <>
  //       <p>{item.Director}</p>
  //       {/* <p>Director</p> */}
  //       <p>{item.Producer}</p>
  //       {/* <p>Producer</p> */}
  //       <p>{item.Writer}</p>
  //       {/* <p>Writer</p> */}
  //     </>
  //   ));
  // };

  // const showButtons = () => {
  //   const buttons = ["cast", "trailer", "poster"];

  //   return buttons.map((item) => (
  //     <ButtonSecondary
  //       key={item}
  //       text={item}
  //       onclick={handleExtraDetailsButton}
  //       style={
  //         extraDetailsButton === item
  //           ? "button-secondary-active"
  //           : "button-secondary-default"
  //       }
  //       name={item}
  //     />
  //   ));
  // };

  return (
    <div className="page-component">
      {showBanner()}

      <div className="page-container-mobile">
        <div className="page-mobile-title">
          <h1>
            {data.title} <span>{`(${year})`}</span>
          </h1>
        </div>
        <div className="page-mobile-genre">{genre}</div>
        <div className="page-mobile-buttons">
          <div className="button">
            <i className="fa-solid fa-video"></i>
            <p>Watch Now</p>
          </div>
          <div className="divider">
            <p>|</p>
          </div>
          <div className="button">
            <i className="fa-brands fa-youtube"></i>
            <p>Trailer</p>
          </div>
        </div>
        <div className="page-mobile-overview">
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <p className="tagline">{tagline}</p>
        </div>
        <div className="page-mobile-crew">
          <div className="crew">
            <h3>{director}</h3>
            <p>Director</p>
          </div>
          <div className="crew">
            <h3>{producer}</h3>
            <p>Producer</p>
          </div>
          <div className="crew">
            <h3>{writer}</h3>
            <p>Writer/Story</p>
          </div>
        </div>
        <div className="page-mobile-cast">
          <h3>Cast</h3>
          <div className="cast-container">
            {showCast()}
            <div className="page-cast-card">
              <Link to="/">
                <div className="view-all">
                  <p>view all</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////// */}

      <div className="page-container">
        <div className="page-title">
          <h1>{data.title}</h1>
        </div>
        <div className="page-description">
          <p>{data.overview}</p>
        </div>
        <div className="page-info">
          <div className="page-info-item">
            <p className="page-info-item-title">Status</p>
            <p className="page-info-item-details">
              {data.status}, {data.release_date}
            </p>
          </div>
          <div className="page-info-item">
            <p className="page-info-item-title">Language</p>
            {language}
          </div>
          <div className="page-info-item">
            <p className="page-info-item-title">Genre</p>
            <p className="page-info-item-details">{genre}</p>
          </div>
          <div className="page-info-item">
            <p className="page-info-item-title margin-bottom">Cast</p>
            <p className="page-info-item-details margin-bottom">{cast}</p>
          </div>
          <div className="page-info-item">
            <p className="page-info-item-title">Tags</p>
            <p className="page-info-item-details">{tag}</p>
          </div>
        </div>
      </div>
      {/* <div className="page-extra-details">
        <div className="page-extra-details-button-container">
          {showButtons()}
        </div>
        <div className="page-info"></div>
      </div> */}
    </div>
  );
};

export default MovieParams;
