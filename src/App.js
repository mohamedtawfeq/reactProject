import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../src/components/css/App.css";
import Home2 from "./components/Home/Home2";
import Nave3 from "./components/Nave/Nave3";
import Menu from "./components/Menu/Menu";
import Cart from "./components/cart/Cart";
import Header2 from "./components/Home/Header2";
import Footer from "./components/Home/Footer";
import Name from "./components/Home/Name";
import Imgs from "./components/Home/Imgs";
import Masseges from "./components/Home/Masseges";
import Loading from "./components/Home/Loading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nave3 />
          <Switch>
            <Route path="/" exact>
              <Home2 />
              <Name />
              <Header2 />
              <Imgs />
              <Masseges />
              <Footer />
            </Route>
            <Route path="/Menu">
              <Menu />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}
export default App;
