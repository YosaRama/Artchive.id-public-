// Libs
import { Col } from "antd";

//Components
import ThemesSearchBox from "../search-box";

// Styles
import s from "./index.module.scss";

function ThemesHomepageSearchBox() {
  return (
    <Col className={s.box}>
      <ThemesSearchBox />
      <Col className={s.title}>
        <h1>Your Trusted Online Gallery</h1>
      </Col>
      <Col className={s.text}>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout.
        </p>
      </Col>
    </Col>
  );
}

export default ThemesHomepageSearchBox;
