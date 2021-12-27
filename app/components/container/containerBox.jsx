// Libs
import { Col } from "antd";
import propTypes from "prop-types";

function ContainerBox(props) {
  const { sectionClass, containerClass, children } = props;
  return (
    <section className={sectionClass}>
      <Col className={"dashboard-boxed-container " + containerClass} {...props}>
        {children}
      </Col>
    </section>
  );
}

ContainerBox.propTypes = {
  sectionClass: propTypes.string,
  containerClass: propTypes.string,
  children: propTypes.node,
};

export default ContainerBox;
