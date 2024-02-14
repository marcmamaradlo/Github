import { useContext, useEffect } from "react";
import { MyContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";

// import { MyProvider } from "./context/index";

const App = () => {
  const context = useContext(MyContext);
  const state = context.state;

  useEffect(() => {
    // to prevent the screen from scrolling when nav is openned.
    state.menuIcon
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [state.menuIcon]);

  return (
    // <div id="main">
    <BrowserRouter>
      {/* <MyProvider> */}
      <Navbar />
      <Router />
      <Footer />
      {/* </MyProvider> */}
    </BrowserRouter>
    // </div>
  );
};

export default App;
