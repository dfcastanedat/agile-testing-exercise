import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

const dummy = (xd) => {
  console.log(xd);
};

render(<App onSubmit={dummy} />, rootElement);
