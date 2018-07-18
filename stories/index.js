import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ReactTableCopyWrapper from "../src/index";
import data from "../example/src/data/data.json";

storiesOf("ReactTableWrapper", module).add("with text", () => (
  <ReactTableCopyWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
  />
));

storiesOf("ReactTableCopyWrapper", module).add("with style", () => (
  <ReactTableWrapper
    pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 3px solid pink;}</style>"
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
  />
));
