/* eslint-disable react/prop-types */
import SvgLogo from "../assets/svg/purplefi-logo.svg";
function Logo({ style, imageStyle }) {
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
      <img src={SvgLogo} alt="Logo" style={imageStyle} />
    </div>
  );
}

export default Logo;
