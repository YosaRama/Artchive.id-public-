// Libs
import propTypes from "prop-types";
import { Menu } from "antd";

// Icons
import { ArrowRightOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";

function AppContentsExhibitionDetailsNavbar(props) {
  const { currentMenu, setCurrentMenu } = props;

  //? ============== Menu List ============= ?//
  const menuList = [
    { id: 1, title: "General Information" },
    { id: 2, title: "Artist on Exhibition" },
    { id: 3, title: "Artwork on Exhibition" },
    { id: 4, title: "Gallery on Exhibition" },
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

AppContentsExhibitionDetailsNavbar.propTypes = {
  currentMenu: propTypes.any,
  setCurrentMenu: propTypes.func,
};

export default AppContentsExhibitionDetailsNavbar;
