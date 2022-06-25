// Libs
import propTypes from "prop-types";
import { Col } from "antd";

//Styles
import s from "./index.module.scss";

function ThemesAboutDescription(props) {
  const { title, description } = props;
  return (
    <Col span={24}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.description}>{description}</p>
    </Col>
  );
}

ThemesAboutDescription.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
};

export default ThemesAboutDescription;
