import { Col } from "antd";

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

export default ContainerBox;
