// Libs
import propTypes from "prop-types";
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

function PageTitle(props) {
  const { title, subtitle, className } = props;
  return (
    <Col className={`${s.container} ${className}`}>
      {title && <h1 className={s.title}>{title}</h1>}
      {subtitle && <p className={s.subtitle}>{subtitle}</p>}
    </Col>
  );
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  className: propTypes.string,
};

export default PageTitle;
