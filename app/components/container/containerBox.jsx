import { Col } from "antd";

function ContainerBox(props) {
  return (
    <section className={props.sectionClass}>
      <Col className={"boxed-container " + props.className}>
        {props.children}
      </Col>
    </section>
  );
}

export default ContainerBox;
