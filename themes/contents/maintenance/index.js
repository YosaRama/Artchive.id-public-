// Libs
import { Col } from "antd";
import Image from "next/image";

// Component
import PageContainerBox from "themes/components/container/box-container/indes";

// Styles
import s from "./index.module.scss";

function PageMaintenance() {
  return (
    <PageContainerBox sectionClass={s.section} containerClass={s.container}>
      <Col style={{ textAlign: "center" }}>
        <Col span={24} className={s.image}>
          <Image src="/images/under-construction.png" alt="" layout="fill" />
        </Col>
        <Col className={s.text}>
          <h1>Under Construction!</h1>
          <p>See you on March!</p>
        </Col>
      </Col>
    </PageContainerBox>
  );
}

export default PageMaintenance;
