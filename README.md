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

### 1. Selecting Cells

This step allows you to select which cells you want to copy from the ReactTable.

Each row and column in the ReactTable has a state to track if it is selected or not. A cell is only considered selected when both its row and column is selected.

When it is selected, its background turns green. If it becomes unselected, its background returns to white.

There are 2 ways to select cells:

#### Row and Column Selectors

Upon initialisation, all rows and columns are unselected.

// add images

To toggle a row or column's state, click on its Row or Column Selector, which lies in the same row or column respectively.

// add images

To toggle the state of all the rows in the ReactTable, click on the All Row Selector. When it is checked, all the rows will follow it and be checked as well. When it is unchecked, all the rows will uncheck as well.

The same is true for the All Column Selector, just that it affects the table's columns instead of rows.

// add images

If an individual Row or Column Selector is clicked on, the All Row Selector or All Column Selector will be indeterminate respectively. This state represents when neither all or none of the rows or columns are selected respectively.

If they are clicked while being indeterminate, they will turn unchecked and uncheck every row or column in the table.

#### Specific Cell

Clicking on a cell will alter the state of its row and column's states.

If the cell is unselected, either its row, column or both are unselected. When it is clicked on, both its row and column are selected, thus selecting the cell.

If the cell is already selected, both its row and column are selected. When it is clicked on, both its row and column are unselected, thus deselecting the cell.

### 2. Copying Selected Cells

Once you have selected which cells you want to copy, you can use either of the following methods to copy the selected cells and their headers to your clipboard. Note that only the cells that are displayed will be copied.

Once the cells are copied, they can be pasted into anything that is able to render a table.

#### Copy Selected Cells Button

// image

You can click on the Copy Selected Cells button above the ReactTable to copy the selected cells.

#### Control-C

## Incoporation

### 1. Define Data Source

### 2. Add Table to Page

```jsx
import React, { Component } from 'react'

import ReactTableWrapper from 'react-table-wrapper'

class Example extends Component {

...
render () {
    return (
      <ReactTableWrapper tableId='table' title='Table Title' headers={headers} data={data}  />
    )
  }
}
```

## License

MIT © [](https://github.com/)
