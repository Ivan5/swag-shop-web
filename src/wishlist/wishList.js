import React, { Component } from "react";
import "./wishList.css";
import DataService from "../services/data-services";

import ProductCondensed from "../product-condensed/product-condensed";

class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishList: [{ title: "Bologna Killer", price: 23.99, _id: "sjkld" }]
    };

    this.createWishList = this.createWishList.bind(this);
  }
  createWishList = () => {
    const list = this.state.wishList.map(product => (
      <ProductCondensed product={product} key={product._id} />
    ));

    return list;
  };

  render(props) {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">{this.createWishList()}</ul>
        </div>
      </div>
    );
  }
}

export default Wishlist;
