//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Card from "./component/card";
import Navbar from "./component/navbar";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));



/*
ReactDOM.render(<Navbar />, document.querySelector("#app"));
ReactDOM.render(<Card />, document.querySelector("#app"));
*/



