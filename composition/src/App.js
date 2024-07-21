import React from "react";
import Mybar from "./Toolbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Mybar>
          <h1>Hello React</h1>
          <h2>Component composition</h2>
        </Mybar>
      </div>
    );
  }
}

export default App;