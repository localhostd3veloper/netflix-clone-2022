import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NetflixApp from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<NetflixApp />
	</React.StrictMode>
);
