import { useEffect, useState } from "react";
import { Input, Select, Button, Form } from "antd";
const { Option } = Select;

// Fake API promise function that simulates fetching conversion rates
const fetchConversionRates = () => {
  return new Promise((resolve) => {
    // Simulate an API delay of 1 second
    setTimeout(() => {
      const conversionRates = {
        eth: 20,
        matic: 10,
        axies: 30,
        imo: 15,
        aa: 50,
      };
      resolve(conversionRates);
    }, 1000);
  });
};

function BuyToken() {
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
      const receiveAmount = (parseFloat(value) * conversionRate * purpRate).toFixed(2);
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

        <Form
          layout={"vertical"}
          name="basic"
          initialValues={{ size: "default" }}
          style={{
            width: "70%",
          }}
          size={"middle"}
          form={form}
        >
          {!loading && (
            <>
              <span>
                {selectedCurrency} Conversion Rate:{" "}
                {conversionRates[selectedCurrency] || 1}
              </span>
              <br />
              <span>purp Conversion Rate: {purpRate}</span>
              <br />
              <br />

              <Form.Item label="Enter Amount">
                <Input
                  addonAfter={
                    <Select defaultValue="eth" onChange={handleCurrencyChange}>
                      <Option value="eth">ETH</Option>
                      <Option value="matic">MATIC</Option>
                      <Option value="axies">Axies</Option>
                      <Option value="imo">IMO</Option>
                      <Option value="aa">AA</Option>
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

          {loading && <span>Loading conversion rates...</span>}
        </Form>
      </div>
    </>
  );
}

export default BuyToken;
