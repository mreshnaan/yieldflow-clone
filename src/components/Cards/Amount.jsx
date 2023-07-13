/* eslint-disable react/prop-types */
import JPGLogo from "../../assets/img/single-logo.jpg";
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
            src={JPGLogo}
            style={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
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
