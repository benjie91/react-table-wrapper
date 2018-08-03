import React, { Component } from "react";

import ReactTableCopyWrapper from "react-table-wrapper";
import "react-table/react-table.css";
import ReactTable from "react-table";

import data from "./data/data.json";

export default class App extends Component {
  changeTipsSpoilerText(open) {
    const spoiler = document.getElementById("tipsSpoilerHead");
    if (open) {
      spoiler.innerHTML = "Click here to show tips.";
    } else {
      spoiler.innerHTML = "Click here to hide tips.";
    }
  }

  changeOriginalTableSpoilerText(open) {
    const spoiler = document.getElementById("tableSpoilerHead");
    if (open) {
      spoiler.innerHTML = "Click here to show a simple ReactTable.";
    } else {
      spoiler.innerHTML = "Click here to hide the ReactTable.";
    }
  }

  render() {
    return (
      <div align="center">
        <h1>ReactTableCopyWrapper</h1>
        <p>
          A wrapper that provides functionalities to select and copy cells from
          a ReactTable.
        </p>
        <hr />
        <details>
          <summary
            id="tipsSpoilerHead"
            onClick={e =>
              this.changeTipsSpoilerText(e.currentTarget.parentNode.open)
            }
          >
            Click here to show tips.
          </summary>
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
        <br />
        <details>
          <summary
            id="tableSpoilerHead"
            onClick={e =>
              this.changeOriginalTableSpoilerText(
                e.currentTarget.parentNode.open
              )
            }
          >
            Click here to show a simple ReactTable.
          </summary>
          <br />
          <ReactTable
            data={data.rowData}
            columns={data.headers}
            defaultPageSize={10}
          />
        </details>
        <hr />
        <ReactTableCopyWrapper
          tableId="Table1"
          title="Table 1"
          headers={data.headers}
          data={data.rowData}
          defaultPageSize={10}
        />
        <ReactTableCopyWrapper
          tableId="Table2"
          title="Table 2"
          headers={data.headers}
          data={data.rowData}
          defaultPageSize={10}
        />
        <ReactTableCopyWrapper
          tableId="Table3"
          title="Table 3"
          headers={data.headers}
          data={data.rowData}
          defaultPageSize={10}
          pasteStyle="<style>table {border-collapse: collapse;}
          table, td, th {border: 3px solid pink;}</style>"
        />
      </div>
    );
  }
}
