import { Col, Row, Divider } from "antd";
import { RightOutlined } from "@ant-design/icons";
import propTypes from "prop-types";

import s from "./index.module.scss";
import { useRouter } from "next/router";

function ThemesHomepageExhibitionSection(props) {
  const { title, organizedBy, slug, onClick } = props;
  const router = useRouter();
  return (
    <>
      <Col
        className={s.container}
        // onClick={() => router.push(`${slug}`)}
        onClick={onClick}
      >
        <Row gutter={(10, 0)} className={s.row}>
          <Col span={21} className={s.select}>
            <h1 className={s.title}>{title}</h1>
            <p className={s.description}>Organized By {organizedBy}</p>
          </Col>
          <Col span={3} className={s.movePage}>
            <RightOutlined className={s.arrow} />
          </Col>
        </Row>
        <Divider className={s.divider} />
      </Col>
    </>
  );
}

ThemesHomepageExhibitionSection.propTypes = {
  title: propTypes.string,
  organizedBy: propTypes.string,
  slug: propTypes.string.isRequired,
};

export default ThemesHomepageExhibitionSection;
