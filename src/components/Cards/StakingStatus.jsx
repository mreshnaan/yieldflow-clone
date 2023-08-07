import { Button, Card } from "antd";

function StakingStatus() {
  return (
    <>
      <Card
        style={{
          textAlign: "left",
          borderRadius: "12px",
          backgroundColor: "#fff",
          border: "1px solid #dee6f1",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: " 0 0 #0000, 0 0 #0000, 0 4px 8px 0 #eef3fb ",
        }}
      >
        <h4
          style={{
            textAlign: "left",
            fontSize: "24px",
            fontWeight: "500",
            margin: "0px",
            marginBottom: "20px",
          }}
        >
          My PURP Staking
        </h4>
        <div
          style={{
            marginTop: "30px",
            marginBottom: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              marginRight: "16px",
              flex: "1 1",
            }}
          >
            <p
              style={{
                letterSpacing: "0.5px",
                fontSize: "10px",
                textTransform: "uppercase",
                color: "#57627b",
                lineHeight: "16px",
                fontWeight: "700",
              }}
            >
              Total Staked
            </p>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "600",
              }}
            >
              <span>--</span>
            </p>
          </div>
          <div
            style={{
              flex: "1 1",
            }}
          >
            <p
              style={{
                letterSpacing: "0.5px",
                fontSize: "10px",
                textTransform: "uppercase",
                color: "#57627b",
                lineHeight: "16px",
                fontWeight: "700",
              }}
            >
              Available in wallet
            </p>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "600",
              }}
            >
              <span>--</span>
            </p>
          </div>
        </div>
        <Button
          type="primary"
          style={{
            width: "100%",
            height: "40px",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          Stake
        </Button>
        <Button
          type="ghost"
          style={{
            width: "100%",
            height: "40px",
            color: "rgb(75, 30, 150)",
            borderColor: "rgb(75, 30, 150)",
          }}
        >
          UnStake
        </Button>
      </Card>
    </>
  );
}

export default StakingStatus;
