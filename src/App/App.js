import React from "react";

import "./App.css";
import Product from "../product/product";

import HttpService from "../services/http-service";

const http = new HttpService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(
      products => {
        console.log(products);
      },
      err => {
        console.log(err);
      }
    );
  };
  render() {
    return (
      <div className="App">
        <div className="App-main container">
          <div className="row">
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
