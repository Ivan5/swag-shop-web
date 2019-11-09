import React, { Component } from "react";
import "./product-condensed.css";

class ProductCondensed extends Component {
  render(props) {
    return (
      <div className="list-group-item pc-condensed">
        <a href="" className="btn btn-outline-danger">
          X
        </a>
        <p>
          {this.props.product.title} | <b>${this.props.product.price}</b>
        </p>
      </div>
    );
  }
}

export default ProductCondensed;
