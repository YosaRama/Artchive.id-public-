// Libs
import { Col } from "antd";
import propTypes from "prop-types";

function AppContainerBox(props) {
  const { sectionclass, containerClass, children } = props;
  return (
    <section className={sectionclass}>
      <Col className={"dashboard-boxed-container " + containerClass} {...props}>
        {children}
      </Col>
    </section>
  );
}

AppContainerBox.propTypes = {
  sectionclass: propTypes.string,
  containerClass: propTypes.string,
  children: propTypes.node,
};

export default AppContainerBox;
