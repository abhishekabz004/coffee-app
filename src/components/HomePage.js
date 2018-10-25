import React, { Component } from "react";
import { connect } from "react-redux";
import {
    addToCart,
    removeFromCart,
    setVisibilityFilter
} from "../actions/actionCreator";
import { SHOW_ALL } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";
import {
  Button,
} from "semantic-ui-react";

class HomePage extends Component {

  handleClick() {
      this.props.history.push(`/checkout`);
  }

  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12" onLoadStart ={() => this.props.setVisibilityFilter(SHOW_ALL)} >
        <table
            style={{ marginTop: "60px" }}
            className="table table-hover table-dark"
          >
            <thead>
              <tr>
                <th scope="col">Item </th>
                <th scope="col">Prize</th>
                <th scope="col">Add/Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(item => (
                <tr key={"key"+item.id}>
                  <td>
                    {item.name} 
                  </td>
                  <td>
                    {item.rate} 
                  </td>
                  <td>
                    <span
                      className="fas fa-minus-circle"
                      onClick={() => this.props.removeFromCart(item.id)}
                      style={{
                        color: "white",
                        fontSize: "20pt",
                        marginRight: "20px"
                      }}
                    /> {item.quantity}
                    <span
                      className="fas fa-plus-circle"
                      onClick={() => this.props.addToCart(item.id)}
                      style={{ color: "white", fontSize: "20pt" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        <Button primary onClick={() => this.handleClick()}>
                      Move to Cart

        </Button>
      </div>
    );
  }
}

const getVisibleCart = (items, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return items;
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
      addToCart,
      removeFromCart,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
