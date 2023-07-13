/* eslint-disable react/prop-types */
import SvgLogo from "../assets/svg/purplefi-logo.svg";
function Logo({ style }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "60px",
        ...style,
      }}
    >
      <img src={SvgLogo} alt="Logo" />
    </div>
  );
}

export default Logo;
