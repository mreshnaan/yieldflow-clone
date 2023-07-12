/* eslint-disable react/prop-types */
import Icon from "@ant-design/icons";
import { Space } from "antd";

const CustomIcons = ({ svg, color, style, ...props }) => (
  <Space>
    <Icon
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: color,
        paddingRight: "10px",
        ...style,
      }}
      component={svg}
      {...props}
    />
  </Space>
);

export default CustomIcons;
