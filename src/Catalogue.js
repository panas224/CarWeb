import React, { Component } from "react";

class Catalogue extends Component {
  render() {
    return (
      <div>
        <h2>Catalogue</h2>
        <p>Here you can see our catalogue and if you click on any car from menu, you will be redirected to link with full info about vehicle:</p>
        <ol>
          <li>Mercedes-Benz G63 AMG</li>
          <li>Mercedes-Benz S-CLASS W223</li>
          <li>Mercedes-Benz GLC Coupe</li>
          <li>Mercedes-Benz E CLASS</li>
          <li>Mercedes-Benz Maybach GLS 600 </li>
        </ol>
      </div>
    );
  }
}

export default Catalogue;