import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactTable from "react-table";
import "react-table/react-table.css";

import addCopyTableListeners from "./copyTable/addCopyTableListeners";

class ReactTableCopyWrapper extends Component {
  constructor(props) {
    super();

    this.state = {
      selectedRows: {},
      selectAllRows: 0, // 0 = none, 1 = all, 2 = some (indeterminate)
      selectedColumns: {},
      selectAllColumns: 0 // 0 = none, 1 = all, 2 = some (indeterminate)
    };
  }

  componentDidMount() {
    const tableId = `${this.props.tableId}`;
    const pasteStyle = `${this.props.pasteStyle}`; // style how table will be pasted as
    addCopyTableListeners(tableId, pasteStyle);
  }

  getColumns() {
    const columns = [
      // first object = first column
      {
        Header: () => (
          <input
            // allColumnCheckbox
            type="checkbox"
            className="checkbox"
            checked={this.state.selectAllColumns === 1}
            ref={input => {
              if (input) {
                input.indeterminate = this.state.selectAllColumns === 2; // indeterminate true when selectAllColumns == 2
              }
            }}
            onChange={event => {
              this.toggleSelectAllColumns(
                event.currentTarget.parentNode.parentNode
              );
            }}
          />
        ),
        // create column of row checkboxes
        columns: [
          {
            sortable: false,
            Header: () => (
              <input
                // allRowCheckbox
                type="checkbox"
                className="checkbox"
                checked={this.state.selectAllRows === 1}
                ref={input => {
                  if (input) {
                    input.indeterminate = this.state.selectAllRows === 2; // indeterminate when selectAllRows == 2
                  }
                }}
                onChange={() => this.toggleSelectAllRows()}
              />
            ),
            Cell: props => (
              <input
                type="checkbox"
                className="checkbox"
                checked={this.state.selectedRows[props.index] === true} // checked = whether selectedRow is true
                onChange={() => {
                  this.toggleRow(props.index);
                }}
              />
            ),
            width: 45 // min width size for checkboxes
          }
        ]
      }
    ];
    // for each header to be created
    let c;
    for (c = 0; c < this.props.headers.length; c += 1) {
      const i = c + 1;
      columns.push({
        // Header: create column checkbox for each header
        Header: () => (
          <input
            type="checkbox"
            className="checkbox"
            checked={this.state.selectedColumns[i] === true}
            onChange={input => {
              const target = input.currentTarget.parentNode;
              // get index of header using cell position in header row
              const headerIndex = Array.from(
                target.parentNode.children
              ).indexOf(target);
              this.toggleColumns(headerIndex);
            }}
          />
        ),
        // columns: assign header name + accessor
        columns: [this.props.headers[c]]
      });
    }
    return columns;
  }

  /* ROW CHECKBOXES */

  toggleRow(rowIndex) {
    const newSelectedRows = Object.assign({}, this.state.selectedRows);
    newSelectedRows[rowIndex] = !this.state.selectedRows[rowIndex]; // if previously selected, then it should now be deselected, etc.
    this.setState({
      selectedRows: newSelectedRows,
      selectAllRows: 2 // indeterminate
    });
  }

  toggleSelectAllRows() {
    const newSelectedRows = {};
    if (this.state.selectAllRows === 0) {
      // if none selected
      // set all as selected
      let i;
      for (i = 0; i < this.props.data.length; i += 1) {
        newSelectedRows[i] = true;
      }
    }
    // if all selected --> set selectedColumns as {} (none)

    this.setState({
      selectedRows: newSelectedRows,
      selectAllRows: this.state.selectAllRows === 0 ? 1 : 0
    });
  }

  /* COLUMN CHECKBOXES */

  toggleColumns(headerIndex) {
    const newSelectedColumns = Object.assign({}, this.state.selectedColumns);
    newSelectedColumns[headerIndex] = !this.state.selectedColumns[headerIndex]; // if previously selected, then it should now be deselected, etc.
    this.setState({
      selectedColumns: newSelectedColumns,
      selectAllColumns: 2 // indeterminate
    });
  }

  toggleSelectAllColumns(headerCheckboxRow) {
    const newSelectedColumns = {};
    if (this.state.selectAllColumns === 0) {
      // if none selected
      const allHeaders = headerCheckboxRow.getElementsByClassName("rt-th");
      let i;
      for (i = 1; i < allHeaders.length; i += 1) {
        newSelectedColumns[i] = true;
      }
    }
    // if all selected --> set selectedColumns as {} (none)
    this.setState({
      selectedColumns: newSelectedColumns,
      selectAllColumns: this.state.selectAllColumns === 0 ? 1 : 0
    });
  }

  // find column index using cell's header name
  findColumnIndex(headerName) {
    const index = this.props.headers.findIndex(
      item => item.Header === headerName
    );
    return index + 1;
  }

  render() {
    const {} = this.props;

    return (
      <div id={this.props.tableId} align="center">
        <h2>{this.props.title}</h2>
        <button>Copy Selected Cells</button>
        <br />
        <br />
        <ReactTable
          data={this.props.data}
          columns={this.getColumns()}
          defaultPageSize={10}
          pageSizeOptions={[
            10,
            50,
            100,
            500,
            1000,
            2500,
            5000,
            10000,
            15000,
            20000
          ]}
          className="-stiped -highlight"
          getTdProps={(state, rowInfo, column) => {
            const rowIndex = rowInfo.index;
            const columnIndex = this.findColumnIndex(column.Header);

            const rowChecked = this.state.selectedRows[rowIndex];
            const columnChecked = this.state.selectedColumns[columnIndex];

            return {
              style: {
                background:
                  rowChecked && columnChecked && columnIndex !== 0
                    ? "lightgreen" // set colour for selected
                    : "" // set colour for unselected
              },
              onClick: () => {
                if (columnIndex !== 0) {
                  if (rowChecked && columnChecked) {
                    // selected
                    this.toggleRow(rowIndex);
                    this.toggleColumns(columnIndex);
                  } else {
                    // not selected
                    if (!rowChecked) {
                      this.toggleRow(rowIndex);
                    }
                    if (!columnChecked) {
                      this.toggleColumns(columnIndex);
                    }
                  }
                }
              }
            };
          }}
        />
      </div>
    );
  }
}

ReactTableCopyWrapper.propTypes = {
  tableId: PropTypes.string.isRequired,
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  pasteStyle: PropTypes.string
};

ReactTableCopyWrapper.defaultProps = {
  pasteStyle: `<style>table {border-collapse: collapse;} table, td, th {border: 1px solid black;}</style>`
};

export default ReactTableCopyWrapper;

/*
---
name: ReactTableWrapper
menu: Components
---

import {Playground} from 'docz'
import ReactTableWrapper from './index'

import React, { Component } from "react";
import "react-table/react-table.css";
import data from "./data/data.json";

# ReactTableWrapper

## Basic Usage

<Playground>
<ReactTableWrapper
          tableId="Table1"
          title="Table 1"
          headers={data.headers}
          data={data.rowData}
        />
</Playground>
 */
