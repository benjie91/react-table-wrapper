import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ReactTableCopyWrapper from "../src/index";
import data from "../example/src/data/data.json";

storiesOf("Customise Wrapper", module).add("Default", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
  />
));

storiesOf("Customise Wrapper", module).add("Custom Paste Style", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 3px solid pink;}</style>"
  />
));

storiesOf("Customise Wrapper", module).add("Multiple Tables", () => (
  <div>
    <ReactTableCopyWrapper
      tableId="Table1"
      title="Table 1"
      headers={data.headers}
      data={data.rowData}
    />
    <ReactTableCopyWrapper
      tableId="Table2"
      title="Table 2"
      headers={data.headers}
      data={data.rowData}
      pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 3px solid pink;}</style>"
    />
  </div>
));

storiesOf("Customise Table", module).add("Default", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
  />
));

storiesOf("Customise Table", module).add("Custom Default Page Size", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    defaultPageSize={5}
  />
));

storiesOf("Customise Table", module).add("Custom Page Size Options", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    pageSizeOptions={[10, 20, 50, 100, 500, 1000, 5000, 10000, 20000]}
  />
));

storiesOf("Customise Table", module).add("Disallow Sorting", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    sortable={false}
  />
));

storiesOf("Customise Table", module).add("Disallow Column Resizing", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    resizable={false}
  />
));

storiesOf("Customise Table", module).add("Custom Start Page", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    page={9}
  />
));
