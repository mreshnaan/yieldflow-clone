import { Menu } from "antd";
import { AffiliateSvg, HomeSvg, ProductSvg, WalletSvg } from "./Icon/Icons";
import CustomIcons from "./Icon/CustomIcons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/">portfolio</Link>, "1", <CustomIcons svg={HomeSvg} />),
  getItem("products", "sub1", <CustomIcons svg={ProductSvg} />, [
    getItem(
      <Link to="/yflow">YFlow</Link>,
      "3",
      <CustomIcons svg={WalletSvg} />
    ),
    getItem(
      <Link to="/staking">Stacking</Link>,
      "4",
      <CustomIcons svg={WalletSvg} />
    ),
    getItem(
      <Link to="/liquidity-pool">Liquidity Pool</Link>,
      "5",
      <CustomIcons svg={WalletSvg} />
    ),
    getItem(
      <Link to="/liquidity-pool-staking">Lp Token Stacking</Link>,
      "6",
      <CustomIcons svg={WalletSvg} />
    ),
    getItem(
      <Link to="/lending">Lending</Link>,
      "7",
      <CustomIcons svg={WalletSvg} />
    ),
  ]),
  getItem("Affiliate", "sub2", <CustomIcons svg={AffiliateSvg} />, [
    getItem(
      <Link to="/affiliate-leadership">Leadership</Link>,
      "8",
      <CustomIcons svg={WalletSvg} />
    ),
  ]),
];

const MenuItems = () => {
  const { pathname } = useLocation();

  const [currentActive, setCurrentActive] = useState("");
  const [expandMenu, setExpandMenu] = useState();

  const findActiveMenuItem = (pathname) => {
    for (const item of items) {
      if (!item.children && item.label.props.to === pathname) {
        return { key: item.key };
      }
      if (item.children) {
        for (const subItem of item.children) {
          if (subItem.label.props.to === pathname) {
            return { key: subItem.key, explandKey: item.key };
          }
        }
      }
    }
    return {};
  };

  useEffect(() => {
    const { key, explandKey } = findActiveMenuItem(pathname);
    setCurrentActive(key);
    setExpandMenu(explandKey);
  }, [pathname]);
  console.log(expandMenu);
  return (
    <>
      <Menu
        style={{ background: "transparent", border: "none" }}
        defaultActiveFirst={["1"]}
        // openKeys={expandMenu && [expandMenu]}
        selectedKeys={[currentActive]}
        mode={"inline"}
        items={items}
      />
    </>
  );
};

export default MenuItems;
