import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ReactTableCopyWrapper from "../src/index";
import data from "../example/src/data/data.json";

storiesOf("Single ReactTableCopyWrapper", module).add("with default style", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
  />
));

storiesOf("Single ReactTableCopyWrapper", module).add("with custom style", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 3px solid pink;}</style>"
  />
));

storiesOf("Multiple ReactTableCopyWrapper", module).add("both with default style", () => (
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
  />
));

storiesOf("Multiple ReactTableCopyWrapper", module).add("both with custom style", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
    pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 3px solid pink;}</style>"
  />
  <ReactTableCopyWrapper
    tableId="Table2"
    title="Table 2"
    headers={data.headers}
    data={data.rowData}
    pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 10px dotted yellow;}</style>"
  />
));
