import React, { Component } from "react";
import { connect } from "react-redux";
import { burgerReducer } from "./Redux/Reducer/burgerReducer";

class MenuComponent extends Component {
  renderMenu = () => {
    let { burger, menu } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              className="btn btn-success mx-3"
              onClick={() => {
                this.props.handleChange(propsMenu, 1);
              }}
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              className="btn btn-danger mx-3"
              onClick={() => {
                this.props.handleChange(propsMenu, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{price * burger[propsMenu]}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <h4 className="text-info">Chọn thức ăn</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMenu()}
            <tr>
              <td colSpan={3} className="text-right font-weight-bold">
                Tổng tiền:
              </td>
              <td>{this.props.total}</td>
            </tr>
            <tr>
              <td colSpan={4} className="text-right">
                <button className="btn btn-primary">Thanh toán</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    total: state.burgerReducer.total,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (propsBurger, value) => {
      dispatch({
        type: "THAY_DOI_SO_LUONG",
        propsBurger: propsBurger,
        value: value,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
