import { Button } from "antd";
import CustomTable from "../Table/CustomTable";
import { ArrowLeftOutlined } from "@ant-design/icons";

function LPTokenStakingView() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: "APY	",
      dataIndex: "apy	",
      sorter: (a, b) => a.apy - b.apy,
    },
    {
      title: "Staked",
      dataIndex: "staked",
      sorter: (a, b) => a.staked - b.staked,
    },
    {
      title: "Staked Liquidity",
      dataIndex: "stakedliquidity",
      sorter: (a, b) => a.stakedliquidity - b.stakedliquidity,
    },
    {
      title: "Reward",
      dataIndex: "reward",
      sorter: (a, b) => a.reward - b.reward,
    },
    {
      title: "Pool end	",
      dataIndex: "poolend",
      sorter: (a, b) => a.poolend - b.poolend,
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
        href={"/liquidity-pool"}
      >
        Back
      </Button>
      <CustomTable data={data} columns={columns} title={"LP Token Staking"} />
    </>
  );
}

export default LPTokenStakingView;
