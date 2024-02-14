import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Movie from "../components/page-movies/Movie";
import MovieParams from "../components/page-movies/MovieParams";
import TVShow from "../components/page-tv-show/TVShow";
import TVShowParams from "../components/page-tv-show/TVShowParams";
import Person from "../components/page-person/Person";
import PersonParams from "../components/page-person/PersonParams";
import Search from "../components/page-search/Search";
import PageNotFound from "../components/404/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movie/:id" element={<MovieParams />} />
      <Route path="/tv" element={<TVShow />} />
      <Route path="/tv/:id" element={<TVShowParams />} />
      <Route path="/person" element={<Person />} />
      <Route path="/person/:id" element={<PersonParams />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
