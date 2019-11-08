import React from "react";

import "./App.css";
import Product from "../product/product";

import HttpService from "../services/http-service";

const http = new HttpService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: ""
    };
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(
      products => {
        this.setState({ products: products });
      },
      err => {
        this.setState({ error: err });
      }
    );
  };

  productList = () => {
    const list = this.state.products.map(product => (
      <div className="col-sm-4" key={product._id}>
        <Product
          title={product.title}
          price={product.price}
          imgUrl={product.imgUrl}
        />
      </div>
    ));
    return list;
  };

  render() {
    return (
      <div className="App">
        <div className="App-main container">
          <div className="row">{this.productList()}</div>
        </div>
      </div>
    );
  }
}

export default App;
