import React from "react";
import "./styles.css";

import Countries from "./Countries";

export default function App() {
  return (
    <div className="App">
      <h1>COVID-2019 Data Charts</h1>
      <h2>First 60 countries sorted by confirmed cases, in descending order</h2>
      <p>
        <a
          href="https://github.com/melaniam/COVID-19-Charts"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to Code"
        >
          Check out the code
        </a>
        {" and the "}
        <a
          href="https://github.com/CSSEGISandData/COVID-19/issues/295"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to data source"
        >
          data source
        </a>
      </p>

      <Countries />
    </div>
  );
}
