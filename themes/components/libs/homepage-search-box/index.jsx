// Libs
import { Col } from "antd";

//Components
import ThemeArtistSearchBox from "../artist-search-box";

// Styles
import s from "./index.module.scss";

function ThemesHomepageSearchBox() {
  return (
    <Col className={s.box}>
      <ThemeArtistSearchBox />
      <Col className={s.title}>
        <h1>Your Trusted Online Gallery</h1>
      </Col>
      <Col className={s.text}>
        <p>
          Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition
          of the pattern.
        </p>
      </Col>
    </Col>
  );
}

export default ThemesHomepageSearchBox;
