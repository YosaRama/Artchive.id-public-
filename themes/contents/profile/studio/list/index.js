// Libs
import { Col, Divider, Row } from "antd";
import ThemesButton from "themes/components/libs/button";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import ThemesProfileArtworkCard from "themes/components/libs/profile-artwork-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfileStudioList() {
  return (
    <>
      <div className={s.title}>
        <ThemesHeadline title="Artwork" subtitle="You have {number} of artwork" />
      </div>
      <Divider className={s.divider} />
      <Col span={22} className={s.contentContainer}>
        <Row gutter={[16, 16]}>
          <Col lg={{ span: 6 }}>
            <ThemesProfileArtworkCard
              approved={true}
              status="PUBLISHED"
              id={1}
              imgSrc="/images/artwork-1.jpg"
              title="Artwork"
              price="1.000.000"
            />
          </Col>
          <Col lg={{ span: 6 }}>
            <ThemesProfileArtworkCard
              approved={false}
              status="DRAFT"
              id={1}
              imgSrc="/images/artwork-1.jpg"
              title="Artwork"
              price="1.000.000"
            />
          </Col>
          <Col lg={{ span: 6 }}>
            <ThemesProfileArtworkCard
              approved={false}
              status="EDIT"
              id={1}
              imgSrc="/images/artwork-1.jpg"
              title="Artwork"
              price="1.000.000"
            />
          </Col>
          <Col lg={{ span: 6 }}>
            <ThemesProfileArtworkCard
              approved={true}
              status="SOLD"
              id={1}
              imgSrc="/images/artwork-1.jpg"
              title="Artwork"
              price="1.000.000"
            />
          </Col>
        </Row>
        <Col className={s.btnContainer}>
          <ThemesButton>LOAD MORE</ThemesButton>
        </Col>
      </Col>
    </>
  );
}

export default ThemesContentsProfileStudioList;
