import React, { Component } from "react";
import "./Foot.css";
import Delete from "./Delete.js";
import green from "./images/green.png";
import red from "./images/red.png";
import yellow from "./images/yellow.png";

class Meal extends Component {
  state = {
    image: green
  };

  renderImage = () => {
    console.log("render");
    if (this.props.co2 > 1000) {
      this.setState({ image: red });
    } else if (this.props.co2 > 500) {
      this.setState({ image: yellow });
    }
  };

  componentDidMount() {
    console.log("component did mount render image");
    this.renderImage();
  }

  render() {
    return (
      <div className="cardwrapper">
        <div className="card">
          <div className="img-container">
            <Delete onClick={() => this.props.deleteMeal(this.props.id)} />
            <img className="foot" src={this.state.image} alt="footprint" />
          </div>
          <div className="results">
            <p className="result__food">{this.props.food}</p>
            <p className="props">{this.props.co2}</p>{" "}
            <p className="black"> Grams of CO2</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Meal;
