import React, { Component } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/actionCreator";
import { SHOW_CART } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";
import {
  Button,
} from "semantic-ui-react";

class CartPage extends Component {
  handleClick() {
    this.props.history.push(`/confirmOrder`);
  }

  goToHomePage() {
    this.props.history.push(`/`);
  }
  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12" onLoadStart ={() => this.props.setVisibilityFilter(SHOW_CART)}  style={{ color: "#3c1414" }}>
        <h2>Your Order</h2>
        {this.props.items.length !== 0 ? (
            <div>
        <table>
            <tbody>
              {this.props.items.map(item => (
                <tr key={"key"+item.id}>
                  <td>
                    {item.name} 
                  </td>
                  <td>
                      x{item.quantity}
                  </td>
                  <td>
                      {item.quantity}*{item.rate}
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        <Button primary onClick={() => this.handleClick()}>
                  Confirm Order

        </Button>
        </div>
        ): (
          <div
            style={{ marginTop: "50px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
          >
            <div className="alert alert-danger" role="alert">
              You haven't ordered anything yet.! 
            </div>
            <div>
                Kindly go back to the 
                <span style = {{width: "50px", height: "25px" , border: "1px", color: "#3c1414", boxSizing: "border-box"}}
                 onClick ={() => this.goToHomePage()}>
                Menu
                </span>
                and add something to the cart.
            </div>
          </div>
        )}{" "}

        
      </div>
    );
  }
}

const getVisibleCart = (items, filter) => {
  switch (filter) {
    case SHOW_CART:
      return items.filter(t => t.quantity >0);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return {
    items: getVisibleCart(state.items, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
