import React from "react";
import { render } from "react-dom";

function hi() {
  return <h1>hello</h1>;
}

render(<hi />, document.getElementById("App"));
