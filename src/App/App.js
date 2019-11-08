import React from "react";

import "./App.css";
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
        <header className="App-header">
          <h2>Welcome to The Swag Shop</h2>
        </header>
      </div>
    );
  }
}

export default App;
