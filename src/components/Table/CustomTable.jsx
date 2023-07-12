/* eslint-disable react/prop-types */
import HeadLine from "../HeadLine";
import { Table } from "antd";

function CustomTable({ columns, data, title }) {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <HeadLine title={title} />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
}

export default CustomTable;
