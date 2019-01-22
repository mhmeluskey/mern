import React, { Component } from "react";
import "./Foot.css";
import Delete from "./Delete.js";
import green from "./green.png";
import red from "./red.png";
import yellow from "./yellow.png";

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
      <div className="wrapper">
        <div className="card">
          <div className="img-container">
            {" "}
            <Delete onClick={() => this.props.deleteMeal(this.props.id)} />
            <img className="foot" src={this.state.image} />
          </div>
          <div className="results">
            <p className="result__food">
              Food: {this.props.food}
              {/* {co2food.food} */}
              <br /> Co2 in Kilos: {this.props.co2}
              {/* {co2food.co2} */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Meal;
