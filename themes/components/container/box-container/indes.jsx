// Libs
import { Col } from "antd";
import propTypes from "prop-types";

// Style
import s from "./index.module.scss";

function PageContainerBox(props) {
  const { sectionClass, containerClass, children } = props;
  return (
    <section className={s.section + " " + sectionClass}>
      <Col className={s.container + " " + containerClass} {...props}>
        {children}
      </Col>
    </section>
  );
}

PageContainerBox.propTypes = {
  sectionClass: propTypes.string,
  containerClass: propTypes.string,
  children: propTypes.node,
};

export default PageContainerBox;
