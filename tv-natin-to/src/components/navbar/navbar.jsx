import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context";

const Navbar = () => {
  const context = useContext(MyContext);
  const handleNavbarLinkClick = context.handleNavbarLinkClick;
  const handleQuickSearch = context.handleQuickSearch;
  const handleQuickSearchValue = context.handleQuickSearchValue;
  const handleBurgerIcon = context.handleBurgerIcon;
  const state = context.state;
  console.log(state.quickSearchValue);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-backdrop">
          <div className="navbar-links-container">
            <div
              className={
                state.activePage === "home"
                  ? "display-hidden"
                  : "navbar-logo-container"
              }
            >
              <Link
                to="/"
                className={
                  state.activePage === "home"
                    ? "navbar-links-container-active"
                    : "navbar-links-container-default"
                }
              >
                <i
                  className="fa-solid fa-house"
                  id="home"
                  onClick={handleNavbarLinkClick}
                ></i>
              </Link>
            </div>
            <div className="navbar-links-container">
              <Link
                to="/movie"
                id="movie"
                className={
                  state.activePage === "movie"
                    ? "navbar-links-container-active"
                    : "navbar-links-container-default"
                }
                onClick={handleNavbarLinkClick}
              >
                MOVIE
              </Link>
              <Link
                to="/tv"
                id="tv"
                onClick={handleNavbarLinkClick}
                className={
                  state.activePage === "tv"
                    ? "navbar-links-container-active"
                    : "navbar-links-container-default"
                }
              >
                TV SHOW
              </Link>
              <Link
                to="/person"
                id="person"
                onClick={handleNavbarLinkClick}
                className={
                  state.activePage === "person"
                    ? "navbar-links-container-active"
                    : "navbar-links-container-default"
                }
              >
                PEOPLE
              </Link>
              <Link
                to="/search"
                id="search"
                onClick={handleNavbarLinkClick}
                className={
                  state.activePage === "search"
                    ? "navbar-links-container-active"
                    : "navbar-links-container-default"
                }
              >
                SEARCH
              </Link>
            </div>
          </div>

          <form
            className="navbar-search-container"
            onSubmit={handleQuickSearch}
          >
            <input
              type="text"
              placeholder="Search"
              onChange={handleQuickSearchValue}
            />
            <Link to={`/search/${state.quickSearchValue}`}>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </Link>
          </form>
          <div className="navbar-links-container">
            <Link
              to="/user"
              id="user"
              onClick={handleNavbarLinkClick}
              className={
                state.activePage === "user"
                  ? "navbar-links-container-active"
                  : "navbar-links-container-default"
              }
            >
              Hi, Welcome!
            </Link>
          </div>
          <div className="navbar-menu-icon" onClick={handleBurgerIcon}>
            {state.menuIcon ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </div>

      <div className={state.menuIcon ? "off-canvas" : "display-none"}>
        <div className="off-canvas-links-container">
          <Link
            to="/"
            id="home"
            className={
              state.activePage === "home"
                ? "off-canvas-links-active"
                : "off-canvas-links-default"
            }
            onClick={handleNavbarLinkClick}
          >
            HOME
          </Link>
          <Link
            to="/movie"
            id="movie"
            className={
              state.activePage === "movie"
                ? "off-canvas-links-active"
                : "off-canvas-links-default"
            }
            onClick={handleNavbarLinkClick}
          >
            MOVIE
          </Link>
          <Link
            to="/tv"
            id="tv"
            onClick={handleNavbarLinkClick}
            className={
              state.activePage === "tv"
                ? "off-canvas-links-active"
                : "off-canvas-links-default"
            }
          >
            TV SHOW
          </Link>
          <Link
            to="/person"
            id="person"
            onClick={handleNavbarLinkClick}
            className={
              state.activePage === "person"
                ? "off-canvas-links-active"
                : "off-canvas-links-default"
            }
          >
            PEOPLE
          </Link>
          <Link
            to="/search"
            id="search"
            onClick={handleNavbarLinkClick}
            className={
              state.activePage === "search"
                ? "off-canvas-links-active"
                : "off-canvas-links-default"
            }
          >
            SEARCH
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
