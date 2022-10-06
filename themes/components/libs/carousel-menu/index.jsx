// Libs
import propTypes from "prop-types";
import { Col, Row } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesCarouselMenu(props) {
  const { handleSetMenu, currentMenu, menuList } = props;
  return (
    <section>
      <Row className={s.menuContainer}>
        {menuList.map((item, index) => {
          return (
            <Col
              className={`${s.menuItem} ${currentMenu == item.key.toUpperCase() ? s.active : ""}`}
              span={7}
              key={index}
              onClick={() => handleSetMenu(item)}
            >
              <p>{item.label}</p>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

ThemesCarouselMenu.propTypes = {
  currentMenu: propTypes.string,
  handleSetMenu: propTypes.func,
  menuList: propTypes.array.isRequired,
};

export default ThemesCarouselMenu;
