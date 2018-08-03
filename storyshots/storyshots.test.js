import React from "react";
import renderer from "react-test-renderer";
import ReactTableCopyWrapper from "../src/index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ReactTableCopyWrapper
        tableId="Table1"
        title="Table 1"
        headers={data.headers}
        data={data.rowData}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
