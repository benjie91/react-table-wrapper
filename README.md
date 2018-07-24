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

3.  The demo page will load up to `localhost:3000` by default. You can now play around with the demo. It will load 3 ReactTables with this wrapper attached onto it.

## Selecting Cells

This step allows you to select which cells you want to copy from a ReactTable.

Each row and column in the ReactTable has a state to track if it is selected or not.

**A cell is only considered selected when both its row and column is selected.** When it is selected, its background turns green. If it becomes unselected, its background returns to white.

There are 2 ways to select cells:

### 1. Checkbox Selectors

Upon initialisation, all rows and columns are unselected.

![Checkbox Selectors](/documentationPics/1.png)

To toggle a row or column's state (selected/unselected), click on its Row or Column Selector, which are highlighted in the blue and red box in the image above respectively.

To toggle the state of all the rows in the ReactTable, click on the All Row Selector, which is in the green box. When it is checked, all the rows will follow it and be checked as well. When it is unchecked, all the rows will uncheck as well.

The same is true for the All Column Selector, which is in the purple box. The only difference is that it affects the table's columns instead of rows.

![Indeterminate](/documentationPics/indeterminate.PNG)

If an individual Row or Column Selector is clicked on, the All Row Selector or All Column Selector will be indeterminate respectively. This state represents when neither all or none of the rows or columns are selected respectively.

If they are clicked while being indeterminate, they will turn unchecked and uncheck every row or column in the table.

### 2. Specific Cell

Clicking on an individual cell will select or deselect it by altering the state of its row and column.

If the cell is unselected, either its row, column or both are unselected. When it is clicked on, both its row and column are selected, thus selecting the cell.

If the cell is already selected, both its row and column are selected. When it is clicked on, both its row and column are unselected, thus deselecting the cell.

## Copying Selected Cells

Once you have selected which cells you want to copy, you can use either of the following methods to copy the selected cells and their headers to your clipboard. Note that only the cells that are displayed will be copied.

### Copy Selected Cells Button

![Copy Selected Cells Button](/documentationPics/copyButton.PNG)

You can click on the Copy Selected Cells button that appears above a ReactTable to copy its selected cells.

### Control-C

You can also copy the selected cells by pressing <kbd>Control</kbd>+<kbd>C</kbd> for Windows or <kbd>Command</kbd>+<kbd>C</kbd> for Mac.

If you are using multiple ReactTables on the same page, note that the cells will be copied from the last table that is clicked on.

Also, note that using this method while there is a cursor selection on the page will copy the selected text instead of the table cells.

## Pasting Cells

![Pasted Output](/documentationPics/pastedOutput.PNG)

Once the cells are copied, they can be pasted into anything that is able to render a table, such as Microsoft Excel, Word or Outlook.

## Incoporation

### Define Data Source

Create a JSON file to serve as the ReactTable's source of data. It must contain 2 arrays to store the information of the table's headers and rows.

~~example of header~~

The header array should should contain JSON objects that each represent a column in the table.

The Header value will be the name of the header in the table. The accessor value will be the key to determine which part of a row's information will be placed under that header.

The items in the header array should match the number and order of columns to be displayed in the ReactTable.

~~example of rowdata~~

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

You can also import ReactTable's default style. Otherwise, it may not render to look like a table.

```jsx
import "react-table/react-table.css";
```

Next, import the ReactTable's data source.

```jsx
import data from "./anywhere/data.json";
```

#### Add the Table

You can add the wrapper to a React component using 4 props:

1.  tableId (string): Used as an HTML ID on the page to identify the table. Ensure that it is unique in the page.
2.  title (string): Used as the title that appears above at the top of the ReactTable.
3.  headers (array): Used to create the table headers.
4.  data (array): Used to create the table rows.

```jsx
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
