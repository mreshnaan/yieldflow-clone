/* eslint-disable react/prop-types */

function Wallet({ img, title, subTitle }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={img}
          style={{
            width: "40px",
            height: "40px",
            marginBottom: "12px",
            marginTop: "12px",
          }}
        />
        <h1
          style={{
            color: " rgba(0, 0, 0, 0.88)",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "1.3",
          }}
        >
          {title}
        </h1>
        <h6
          style={{
            color: " rgb(101, 101, 101)",
            textAlign: "center",
            wordBreak: "break-word",
            lineHeight: "1.6",
            fontSize: "14px",
          }}
        >
          {subTitle}
        </h6>
      </div>
    </>
  );
}

export default Wallet;
