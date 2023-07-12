/* eslint-disable react/prop-types */

function HeadLine({ id, title }) {
  return (
    <h2
      id={id}
      style={{
        textAlign: "left",
        marginBottom: "0.5em",
        color: "rgba(0, 0, 0, 0.88)",
        fontWeight: "700",
        fontSize: "30px",
        lineHeight: "1.26",
        marginLeft: "15px",
      }}
    >
      {title}
    </h2>
  );
}

export default HeadLine;
