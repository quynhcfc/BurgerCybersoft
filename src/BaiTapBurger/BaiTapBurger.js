import React, { Component } from "react";
import BugerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";
import "./BurgerCSS.css";

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="my-4">Cửa hàng Burger Cybersoft</h1>
          <div className="row">
            <BugerComponent />
            <MenuComponent />
          </div>
        </div>
      </div>
    );
  }
}
