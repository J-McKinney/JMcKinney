import React, { Component } from "react";
import ContainerStyle from "./Container.module.css";

class Container extends Component {
  render() {
    return (
      <>
        <div className={ContainerStyle.div}></div>
      </>
    );
  }
}

export default Container;
