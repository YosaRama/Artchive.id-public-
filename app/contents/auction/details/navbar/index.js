// Libs
import propTypes from "prop-types";
import { Menu } from "antd";

// Icons
import { ArrowRightOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";

function AppContentsAuctionDetailsNavbar(props) {
  const { currentMenu, setCurrentMenu } = props;

  //? ============== Menu List ============= ?//
  const menuList = [
    { id: 1, title: "General Information" },
    { id: 2, title: "Lots on Auction" },
    { id: 3, title: "Participant on Auction" },
  ];
  // * ====================================== * //

  //? ============== Handle Select Menu ============= ?//
  const handleSelectMenu = (value) => {
    setCurrentMenu(value.key);
  };
  // * ====================================== * //

  return (
    <>
      <Menu onSelect={handleSelectMenu} defaultActiveFirst={currentMenu}>
        {menuList.map((item) => {
          return (
            <Menu.Item key={item.id}>
              {item.title} <ArrowRightOutlined className={s.arrowIcon} />
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
}

AppContentsAuctionDetailsNavbar.propTypes = {
  currentMenu: propTypes.any,
  setCurrentMenu: propTypes.func,
};

export default AppContentsAuctionDetailsNavbar;
