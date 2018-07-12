import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ReactTableWrapper from "../src/index";
import data from "../example/src/data/data.json";

storiesOf("ReactTableWrapper", module).add("with text", () => (
  <ReactTableWrapper
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
  />
));

storiesOf("ReactTableWrapper", module).add("with style", () => (
  <ReactTableWrapper
    pasteStyle="<style>table {border-collapse: collapse;}
      table, td, th {border: 3px solid pink;}</style>"
    tableId="Table1"
    title="Table 1"
    headers={data.headers}
    data={data.rowData}
  />
));
