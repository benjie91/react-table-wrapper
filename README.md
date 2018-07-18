# react-table-wrapper

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

## Cell Selection

### Row and Column Selectors

## Copying Cells

## License

MIT © [](https://github.com/)
