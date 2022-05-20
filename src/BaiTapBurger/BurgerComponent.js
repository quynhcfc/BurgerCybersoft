import React, { Component } from "react";
import { connect } from "react-redux";

class BugerComponent extends Component {
  renderBurger = () => {
    let { burger } = this.props;

    // Sử dụng for...in
    // let content = [];
    // for (let burgerProps in burger) {
    //   let burgerIngredients = [];

    //   for (let i = 0; i < burger[burgerProps]; i++) {
    //     burgerIngredients.push(<div className={burgerProps}></div>);
    //   }
    //   content.push(burgerIngredients);
    // }
    // return content;

    // Sử dụng Object.entries
    return Object.entries(burger).map(([propsBurger, value]) => {
      let burgerIngredients = [];
      for (let i = 0; i < value; i++) {
        burgerIngredients.push(<div key={i} className={propsBurger}></div>);
      }
      return burgerIngredients;
    });
  };

  render() {
    return (
      <div className="col-6">
        <h3 className="text-danger">Thành phần burger đã chọn</h3>
        <div style={{ padding: "0 7rem" }}>
          <div className="burgerAbove"></div>
          {this.renderBurger()}
          <div className="burgerBelow"></div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
  };
};

export default connect(mapStateToProps, null)(BugerComponent);
