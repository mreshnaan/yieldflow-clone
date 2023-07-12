/* eslint-disable react/prop-types */
function Amount({ amount }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "8px 20px",
            display: "flex",
            alignItems: "center",
            flex: " 0 0 auto",
            color: "black",
          }}
        >
          <img
            src="https://app.yieldflow.com/static/media/yflow.f7f20cc9cbb65517a4edff4becfba279.svg"
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "rgb(251, 251, 252)",
              fontfamily: "Poppins !important",

              marginRight: "13px",
            }}
          />
          ${amount}
        </div>
      </div>
    </>
  );
}

export default Amount;
