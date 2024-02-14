import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../banner/Banner";
import VerticalCardCarousel from "../carousel/VerticalCardCarousel";

const Home = () => {
  useEffect(() => {
    getPopularMovies();
  }, []);

  const [popularMovies, setPopularMovie] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [popularPerson, setPopularPerson] = useState([]);
  const [filipinoMovies, setFilipinoMovies] = useState([]);
  // const [filipinoList, setFilipinoList] = useState([]);
  const THE_KEY = "0b6d2ddf9c5e096294fa3534fb357915";
  console.log(filipinoMovies);
  // console.log(filipinoList);
  // const ApiKey = process.env.REACT_APP_SECRET_KEY;

  async function getPopularMovies() {
    try {
      const getPopularMovies = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=0b6d2ddf9c5e096294fa3534fb357915&language=en-US&page=1`
      );
      setPopularMovie(getPopularMovies.data.results);

      const getPopularTVShows = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=0b6d2ddf9c5e096294fa3534fb357915&language=en-US&page=1`
      );
      setPopularTV(getPopularTVShows.data.results);

      const getPopularPerson = await axios.get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=0b6d2ddf9c5e096294fa3534fb357915&language=en-US&page=1`
      );
      setPopularPerson(getPopularPerson.data.results);

      const getFilipinoMovies = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${THE_KEY}&language=en-US&with_companies=149142`
      );
      setFilipinoMovies(getFilipinoMovies.data.results);

      // const getFilipinoList = await axios.get(
      //   `https://api.themoviedb.org/3/list/8811?api_key=${THE_KEY}&page=1`
      // );
      // setFilipinoList(getFilipinoList.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="home-container">
      <Banner data={popularMovies} />
      <div className="home-header">
        <h3>Enjoy FREE subscription service</h3>
        <div className="home-header-paragraph">
          <p>TRENDING</p>
          <i className="fa-solid fa-circle"></i>
          <p>FILMS</p>
          <i className="fa-solid fa-circle"></i>
          <p>SERIES</p>
          <i className="fa-solid fa-circle"></i>
          <p>BLOCKBUSTER</p>
          <i className="fa-solid fa-circle"></i>
          <p>HOLLYWOOD</p>
        </div>
      </div>
      <VerticalCardCarousel
        header={`Trending Movies`}
        data={popularMovies}
        dataType={`movie`}
      />
      <VerticalCardCarousel
        header={`Trending TV Shows`}
        data={popularTV}
        dataType={`tv`}
      />
      <VerticalCardCarousel
        header={`Trending People`}
        data={popularPerson}
        dataType={`person`}
      />
      {/* <VerticalCardCarousel
        header={`Filipino`}
        data={filipinoMovies}
        dataType={`movie`}
      /> */}
    </div>
  );
};

export default Home;
