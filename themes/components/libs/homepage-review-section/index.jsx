import { Col, Row, Image, Card } from "antd";
import { StarFilled } from "@ant-design/icons";

import s from "./index.module.scss";

function ThemesHomepageReviewSection() {
  return (
    <>
      {/* <Col span={12} className={s.container}>
  
        <p className={s.review}>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are
          also reproduced in their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </p>
        <Row gutter={[20, 20]} className={s.imageContainer}>
          <Col>
            {" "}
            <Image
              src="/images/artwork-1.jpg"
              alt="artwork-1"
              className={s.image}
              preview={false}
            />
          </Col>

          <Col className={s.identity}>
            <Row className={s.rating}>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </Row>
            <h2>I Made Duatmika</h2>
            <p>Senior Painter | Bali | Specialization</p>
          </Col>
        </Row>
       
      </Col> */}

      {/* //? ============== v2 ============= ?// */}
      <Col span={14} className={s.container}>
        <Row gutter={[20, 20]} className={s.imageContainer}>
          <Col span={6}>
            {" "}
            <Image
              src="/images/artwork-1.jpg"
              alt="artwork-1"
              className={s.image}
              preview={false}
            />
          </Col>

          <Col span={18} className={s.identity}>
            <Row className={s.rating}>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </Row>
            <h2>I Made Duatmika</h2>
            <p>Senior Painter | Bali | Specialization</p>
            <p className={s.review}>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
              are also reproduced in their exact original form, accompanied by English versions from
              the 1914 translation by H. Rackham.
            </p>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default ThemesHomepageReviewSection;
