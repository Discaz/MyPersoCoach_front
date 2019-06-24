import React from "react";

import "./Source2environment.css";

import IconMain from "../Component/IconMain";
import TitlePage from "../Component/TitlePage";
import HeadingText from "../Component/HeadingText";
import FowardStep from "../Component/ForwardStep";
import NextStep from "../Component/NextStep";
import Answer from "../Component/Answer"

class Source2Environment extends React.Component {
  state = {
    icon: [],
    problem_origin: [],
    text_static: []
  };

  getHeader = () => {
    fetch("http://localhost:3001/icon/27")
      .then(res => res.json())
      .then(data => {
        this.setState({ icon: data[0] });
      });
  };
  getProblem = () => {
    fetch("http://localhost:3001/problem_origin/1")
      .then(res => res.json())
      .then(data => {
        this.setState({ problem_origin: data[0] });
      });
  };
  getTextStatic = () => {
    fetch("http://localhost:3001/text_static/98")
      .then(res => res.json())
      .then(data => {
        this.setState({ text_static: data[0] });
      });
  };

  componentDidMount() {
    this.getHeader();
    this.getProblem();
    this.getTextStatic();
  }

  render() {
    return (
      <div className="containerSource2Environment">
        <IconMain icon={this.state.icon.picture_src} />
        {/* <TitlePage problem_origin={this.state.problem_origin} /> */} 
        {/* <HeadingText text_static={this.state.text_static.all_text} /> */} <p>Décrire le problème ou la situation à faire évoluer ci-dessous</p>
        <Answer/>
        <FowardStep/>
        <NextStep />
      </div>
    );
  }
}
export default Source2Environment;
