import React, { Component } from 'react'

import ReactTableWrapper from 'react-table-wrapper'
import 'react-table/react-table.css'

import sample from './data/data.json'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>A wrapper that provide additional functionality for ReactTable</h1>
        <ReactTableWrapper tableId='Table1' title='Table 1' headers={sample.headers} data={sample.rowData} />
        <ReactTableWrapper tableId='Table2' title='Table 2' headers={sample.headers} data={sample.rowData} />
        <ReactTableWrapper tableId='Table3' title='Table 3' headers={sample.headers} data={sample.rowData} />
      </div>
    )
  }
}
