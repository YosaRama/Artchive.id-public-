// Libs
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

function PageTitle() {
  return (
    <Col className={`${s.container}`}>
      <h1 className={s.title}>Title</h1>
      <p className={s.subtitle}>Subtitle</p>
    </Col>
  );
}

export default PageTitle;
