# ReactTableCopyWrapper

> A wrapper that provide functionalities to select and copy cells from a ReactTable.

[![NPM](https://img.shields.io/npm/v/react-table-wrapper.svg)](https://www.npmjs.com/package/react-table-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)

## Run Demo

1.  Build the component by typing this in the terminal:

```
yarn build
```

2.  Run the example demo by typing this next:

```
cd example
yarn start
```

3.  The demo page will load up to `localhost:3000` by default. You can now play around with the demo.

## Usage

### Selecting Cells

This step allows you to select which cells you want to copy from the ReactTable.

Each row and column in the ReactTable has a state to track if it is selected or not. A cell is only considered selected when both its row and column is selected.

When it is selected, its background turns green. If it becomes unselected, its background returns to white.

There are 2 ways to select cells:

#### Row and Column Selectors

Upon initialisation, all rows and columns are unselected.

~~image~~

To toggle a row or column's state, click on its Row or Column Selector, which lies in the same row or column respectively.

~~image~~

To toggle the state of all the rows in the ReactTable, click on the All Row Selector. When it is checked, all the rows will follow it and be checked as well. When it is unchecked, all the rows will uncheck as well.

The same is true for the All Column Selector, just that it affects the table's columns instead of rows.

~~image~~

If an individual Row or Column Selector is clicked on, the All Row Selector or All Column Selector will be indeterminate respectively. This state represents when neither all or none of the rows or columns are selected respectively.

If they are clicked while being indeterminate, they will turn unchecked and uncheck every row or column in the table.

#### Specific Cell

Clicking on a cell will alter the state of its row and column's states.

If the cell is unselected, either its row, column or both are unselected. When it is clicked on, both its row and column are selected, thus selecting the cell.

If the cell is already selected, both its row and column are selected. When it is clicked on, both its row and column are unselected, thus deselecting the cell.

### Copying Selected Cells

Once you have selected which cells you want to copy, you can use either of the following methods to copy the selected cells and their headers to your clipboard. Note that only the cells that are displayed will be copied.

#### Copy Selected Cells Button

~~image~~

You can click on the Copy Selected Cells button above the ReactTable to copy the selected cells.

#### Control-C

You can also copy the selected cells by pressing <kbd>Control</kbd>+<kbd>C</kbd> on your keyboard for Windows or <kbd>Command</kbd>+<kbd>C</kbd> for Mac.

If you are using multiple ReactTables on the same page, note that the cells will be copied from the last table that is clicked on.

Also, note that using this method while there is a cursor selection on the page will copy the selected text instead of the table cells.

### Pasting Cells

~~image~~

Once the cells are copied, they can be pasted into anything that is able to render a table, such as Microsoft Excel, Word or Outlook.

## Incoporation

### Define Data Source

Create a JSON file to serve as the ReactTable's source of data. It must contain 2 arrays to store the information of the table's headers and rows.

~~image~~

The header array should should contain JSON objects that each represent a column in the table.

The Header value will be the name of the header in the table. The accessor value will be the key to determine which part of a row's information will be placed under that header.

The items in the header array should match the number and order of columns to be displayed in the ReactTable.

~~image~~

The rowData array should contain JSON objects that each represent a row in the table.

The table determines what information is placed under each column by matching each key to the a header's accessor value.

### Add Table to Page

Once a ReactTable's data source has been created, it can be added to a page with this wrapper attached onto it.

#### Import the Component

The first step is to import React and the wrapper to your React component.

```jsx
import React, { Component } from "react";
import ReactTableCopyWrapper from "react-table-wrapper";
```

You can also import ReactTable's default style. Otherwise it may not render like a table.

```jsx
import "react-table/react-table.css";
```

Next, import the ReactTable's data source.

```jsx
import data from "./anywhere/data.json";
```

#### Add the Table

You can add the wrapper to a React component with 4 props:

1.  tableId (string): Used as an HTML ID on the page to identify the table. Ensure that it is unique in the page.
2.  title (string): Used as the title that appears above at the top of the ReactTable.
3.  headers (array): Used to create the table headers.
4.  data (array): Used to create the table rows.

```jsx
import

class Example extends Component {
...
render () {
    return (
      <ReactTableCopyWrapper
          tableId="Table1"
          title="Table 1"
          headers={data.headers}
          data={data.rowData}
      />
    )
  }
}
```

You can also add an optional prop:

5.  pasteStyle (string): HTML style tag. Used to define custom style for pasted table.

```jsx
render () {
    return (
      <ReactTableCopyWrapper
          tableId="Table3"
          title="Table 3"
          headers={data.headers}
          data={data.rowData}
          pasteStyle="<style>table {border-collapse: collapse;}
          table, td, th {border: 3px solid pink;}</style>"
      />
    )
  }
}
```

## License

MIT © [](https://github.com/)

```

```
