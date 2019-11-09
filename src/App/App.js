import React from "react";

import "./App.css";

//Components
import Product from "../product/product";
import WishList from "../wishlist/wishList";

//Services
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
        <div className="App-main container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">{this.productList()}</div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
