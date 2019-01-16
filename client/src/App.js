import React, { Component } from "react";
import Form from "./components/Form/Form";
import Co2 from "./components/Co2/Co2";

class App extends Component {
  render() {
    return <Form exact path="/books/:id" component={Co2} />;
  }
}

export default App;
