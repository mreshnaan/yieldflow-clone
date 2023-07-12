import { Button } from "antd";
import CustomTable from "../Table/CustomTable";
import { ArrowLeftOutlined } from "@ant-design/icons";

function AffiliateLeadershipView() {
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      sorter: (a, b) => a.rank - b.rank,
    },
    {
      title: "Affiliate User",
      dataIndex: "affiliateuser",
      sorter: (a, b) => a.affiliateuser - b.affiliateuser,
    },
    {
      title: "Referred Accounts",
      dataIndex: "referredaccounts      ",
      sorter: (a, b) => a.referredaccounts - b.referredaccounts,
    },
  ];
  const data = [];

  return (
    <>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "rgba(0, 0, 0, 0.88)",
          wordBreak: "break-word",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
        icon={<ArrowLeftOutlined />}
        type={"link"}
        href={"/lending"}
      >
        Back
      </Button>
      <CustomTable data={data} columns={columns} title={"LP Token Staking"} />
    </>
  );
}

export default AffiliateLeadershipView;
