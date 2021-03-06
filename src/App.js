import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import OrderPage from "./components/OrderPage";
import {
  Header,
  Image,
} from "semantic-ui-react";
import "./App.css"
import footerPic from "./footerImage.jpg";


class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Header
              as="h1"
              content="CAFE CLAUDE"
              inverted
              style={{
                fontSize: "1.7em",
                fontWeight: "normal",
                marginTop: "0.5em",
                color: "#3d1219"
              }}
            />
        <div className="container" style={{ marginTop: "80px" }}>
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/checkout" component={CartPage} />
                <Route
                  exact
                  path="/confirmOrder"
                  component={OrderPage}
                />
              </Switch>
            </Router>
          </div>
        </div>
        <Image src={footerPic} size ="medium" centered/>
      </div>
    );
  }
}

export default App;
