import React, { Component } from "react";

import ReactTableWrapper from "react-table-wrapper";
import "react-table/react-table.css";

import data from "./data/data.json";

/*         <details>
          <summary>Click me for details!</summary>
        </details> */

/* <div style={{ float: "left" }}>
          <h2>Ways to Select Cells</h2>
          <p>
            <ol>
              <li>Click on Cells</li>
              <li>Click on row and column checkboxes</li>
            </ol>
          </p>
        </div>
        <div style={{ float: "right" }}>
          <h2>Ways to Copy Cells</h2>
          <p>
            1. Control-C <br /> 2. Click on table's Copy Selected Cells button
          </p>
        </div> */

export default class App extends Component {
  changeSpoilerText(open) {
    const spoiler = document.getElementById("spoilerTest");
    if (open) {
      spoiler.innerHTML = "Click here to show tips.";
    } else {
      spoiler.innerHTML = "Click here to hide tips.";
    }
  }

  render() {
    return (
      <div align="center">
        <h1>ReactTableWrapper</h1>
        <p>A wrapper that provides additional functionality for ReactTable.</p>
        <details id="spoilerHead">
          <summary
            id="spoilerTest"
            onClick={e =>
              this.changeSpoilerText(e.currentTarget.parentNode.open)
            }
          >
            Click here to show tips.
          </summary>
          <hr />
          <div style={{ overflow: "auto", width: "60%" }}>
            <div style={{ float: "left", textAlign: "left" }}>
              <h2>Ways to Select Cells</h2>
              <p>
                1. Click on Cells <br /> 2. Click on row and column checkboxes
              </p>
            </div>
            <div style={{ float: "right", textAlign: "left" }}>
              <h2>Ways to Copy Cells</h2>
              <p>
                1. Control-C <br /> 2. Click on table's Copy Selected Cells
                button
              </p>
            </div>
          </div>
        </details>
        <hr />
        <ReactTableWrapper
          tableId="Table1"
          title="Table 1"
          headers={data.headers}
          data={data.rowData}
        />
        <ReactTableWrapper
          tableId="Table2"
          title="Table 2"
          headers={data.headers}
          data={data.rowData}
        />
        <ReactTableWrapper
          tableId="Table3"
          title="Table 3"
          headers={data.headers}
          data={data.rowData}
          pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 3px solid pink;}</style>"
        />
      </div>
    );
  }
}
