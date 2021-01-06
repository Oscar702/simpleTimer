//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

function Counter(props) {
	return (
		<div className="mainCounter">
			<div className="clock">
				<i className="far fa-clock" />
			</div>
			<div className="four">8</div>
			<div className="three" />
			<div className="two" />
			<div className="one" />
		</div>
	);
}

//render your react application
ReactDOM.render(<Counter />, document.querySelector("#app"));
