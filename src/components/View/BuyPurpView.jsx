/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Input, Select, Button, Form, Card } from "antd";
const { Option } = Select;

// Fake API promise function that simulates fetching conversion rates
const fetchConversionRates = () => {
  return new Promise((resolve) => {
    // Simulate an API delay of 1 second
    setTimeout(() => {
      const conversionRates = {
        eth: 1827.46,
      };
      resolve(conversionRates);
    }, 100);
  });
};

function BuyPurpView() {
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("eth");
  const [receiveAmount, setReceiveAmount] = useState("0");
  const [conversionRates, setConversionRates] = useState({});
  const [loading, setLoading] = useState(true);
  const purpRate = 0.3; // You can adjust this rate as needed

  useEffect(() => {
    // Fetch conversion rates from the fake API promise
    fetchConversionRates()
      .then((data) => {
        setConversionRates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching conversion rates:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value) && value !== "") {
      setInputValue(value);
      const conversionRate = conversionRates[selectedCurrency] || 1;
      const receiveAmount = (
        parseFloat(value) *
        conversionRate *
        purpRate
      ).toFixed(2);
      setReceiveAmount(receiveAmount);
    } else {
      setInputValue("");
      setReceiveAmount("0");
    }
  };

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);

    // Perform conversion and update the receive amount based on the selected currency
    const conversionRate = conversionRates[value] || 1;
    const receiveAmount = (
      parseFloat(inputValue) *
      conversionRate *
      purpRate
    ).toFixed(2); // Calculate receive amount
    setReceiveAmount(receiveAmount);
  };

  const handleKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (
      charCode > 31 &&
      (charCode < 48 || charCode > 57) &&
      charCode !== 46 // Allow decimal point
    ) {
      e.preventDefault();
    }
  };

  const handleBuy = () => {
    // Perform the buy logic here
    console.log("Buy button clicked!");
  };

  const subscriptionPackages = [
    {
      name: "Gold",
      price: "$0.30",
      amount: "$300",
      tokens: "1000",
      platformFees: "0%",
    },
    {
      name: "Platinum",
      price: "$0.28",
      amount: "$1,400",
      tokens: "5000",
      platformFees: "0%",
    },
    {
      name: "Black Diamond",
      price: "$0.26",
      amount: "$3,900",
      tokens: "15000",
      platformFees: "0%",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "start",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            color: "black",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          Buy Purp
        </h1>
        <div className="subscription-packages-container">
          <h1 className="subscription-packages-title">Packages</h1>
          <h1 className="subscription-packages-subtitle">Phase 1</h1>
          <div className="subscription-packages-list">
            {subscriptionPackages.map((packageItem) => (
              <Card
                key={packageItem.name}
                title={packageItem.name}
                style={{ width: 300 }}
              >
                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <p className="package-price">{packageItem.price}</p>
                  <div
                    style={{
                      margin: "0",
                      padding: "0",
                      listStyle: "none",
                      background: "#ffffff",
                      borderTop: "1px solid #f0f0f0",
                      display: "flex",
                      borderRadius: " 0 0 8px 8px",
                      marginBottom: "12px",
                    }}
                  ></div>
                  <p>Amount: {packageItem.amount}</p>
                  <p>Tokens $PURP: {packageItem.tokens}</p>
                  <p>Platform Fees Boost: {packageItem.platformFees}</p>
                </div>

                <div
                  style={{
                    height: "30px",
                  }}
                ></div>
              </Card>
            ))}
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          Buy Token
        </h1>
        <Form
          layout={"vertical"}
          name="basic"
          initialValues={{ size: "default" }}
          style={{
            marginTop: "24px",
            width: "70%",
          }}
          size={"middle"}
          form={form}
        >
          {!loading && (
            <>
              <span style={{ textTransform: "capitalize" }}>
                {selectedCurrency} Conversion Rate :{" "}
                {conversionRates[selectedCurrency] || 1}
              </span>
              <br />
              <span style={{ textTransform: "capitalize" }}>
                purp Conversion Rate : {purpRate}
              </span>
              <br />
              <br />

              <Form.Item label="Enter Amount">
                <Input
                  addonAfter={
                    <Select defaultValue="eth" onChange={handleCurrencyChange}>
                      <Option value="eth">ETH</Option>
                    </Select>
                  }
                  placeholder="Enter Amount"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
              </Form.Item>
              <Form.Item label="Receive Amount">
                <Input
                  value={isNaN(receiveAmount) ? "0" : receiveAmount}
                  placeholder="Receive Amount"
                  readOnly
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  style={{
                    width: "150px",
                    height: "40px",
                  }}
                  onClick={handleBuy}
                >
                  Buy
                </Button>
              </Form.Item>
            </>
          )}

          {loading && <span>Loading conversion rate.</span>}
        </Form>
      </div>
    </>
  );
}

export default BuyPurpView;
