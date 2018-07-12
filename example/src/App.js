import React, { Component } from "react";

import ReactTableWrapper from "react-table-wrapper";
import "react-table/react-table.css";

import data from "./data/data.json";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>A wrapper that provides additional functionality for ReactTable</h1>
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
