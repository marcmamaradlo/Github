import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    activePage: "home", // 'home', 'movie', 'tv', 'person', 'search', 'user
    quickSearchValue: "",
    menuIcon: false, // true, false
    extraDetailsButton: "cast", // 'cast', 'trailer', 'poster'
  };

  handleExtraDetailsButton = (e) => {
    this.setState({ extraDetailsButton: e.target.name });
  };

  handleBurgerIcon = () => {
    this.setState({
      menuIcon: !this.state.menuIcon,
    });
  };

  handleNavbarLinkClick = (e) => {
    this.setState({
      activePage: e.target.id,
    });
  };

  handleQuickSearchValue = (e) => {
    this.setState({
      quickSearchValue: e.target.value,
    });
  };

  handleQuickSearch = (e) => {
    e.preventDefault();

    console.log(this.state.quickSearchValue);
  };

  bannerMovieButton = () => {
    this.setState({ activePage: "movie" });
  };

  render() {
    const {
      state,
      handleNavbarLinkClick,
      handleQuickSearchValue,
      handleQuickSearch,
      bannerMovieButton,
      handleExtraDetailsButton,
      handleBurgerIcon,
    } = this;

    return (
      <MyContext.Provider
        value={{
          state,
          handleNavbarLinkClick,
          handleQuickSearchValue,
          handleQuickSearch,
          bannerMovieButton,
          handleExtraDetailsButton,
          handleBurgerIcon,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
