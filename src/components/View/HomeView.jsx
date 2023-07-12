import { Col, Row } from "antd";

import Status from "../Cards/Status";
import { WalletOutlined, EyeOutlined,EyeInvisibleOutlined } from "@ant-design/icons";
import HeadLine from "../HeadLine";
import CustomTable from "../Table/CustomTable";
import { useState } from "react";

function HomeView() {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      sorter: (a, b) => a.product - b.product,
      width: "30%",
    },
    {
      title: "Staked Assets	",
      dataIndex: "stakedassets	",
      sorter: (a, b) => a.stakedassets - b.stakedassets,
    },
    {
      title: "Yield",
      dataIndex: "yield",
      sorter: (a, b) => a.yield - b.yield,
      width: "40%",
    },
  ];
  const data = [];

  return (
    <>
      <HeadLine title={"Overview"} />
      <Row
        gutter={[16, 16]}
        style={{
          paddingTop: "24px",
          paddingBottom: "70px",
        }}
      >
        <Col xs={24} sm={24} md={24} lg={12}>
          <Status
            bg="rgb(16, 97, 254)"
            icon={<WalletOutlined style={{ fontSize: "25px" }} />}
            title="Total assets"
            amount={show ? "0.00" : "****"}
            color={"white"}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Status
            btnBg="rgb(245, 245, 245)"
            bg="#fff"
            icon={
              show ? (
                <EyeInvisibleOutlined style={{ fontSize: "25px" }} />
              ) : (
                <EyeOutlined style={{ fontSize: "25px" }} />
              )
            }
            title="Total assets"
            amount={show ? "0.00" : "****"}
            color={"black"}
            onClickHandler={showHandler}
          />
        </Col>
      </Row>
      <CustomTable data={data} columns={columns} title={"Performance"} />
    </>
  );
}

export default HomeView;
