// Libs
import { Col } from "antd";
import propTypes from "prop-types";

function ContainerBox(props) {
  const { sectionclass, containerClass, children } = props;
  return (
    <section className={sectionclass}>
      <Col className={"dashboard-boxed-container " + containerClass} {...props}>
        {children}
      </Col>
    </section>
  );
}

ContainerBox.propTypes = {
  sectionclass: propTypes.string,
  containerClass: propTypes.string,
  children: propTypes.node,
};

export default ContainerBox;
