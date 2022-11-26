// Libs
import Image from "next/image";
import propTypes from "prop-types";
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2OurRolesSection(props) {
  const {
    title,
    subtitle,
    description,
    image,
    textPosition = "right",
    textMobilePosition = "bottom",
  } = props;
  return (
    <>
      <Col className={s.roleContainer}>
        <ThemesContainerMain>
          <Col span={24}>
            <Row>
              <Col
                md={{ span: 12, order: textPosition === "right" ? 1 : 2 }}
                xs={{ span: 24, order: textMobilePosition === "bottom" ? 1 : 2 }}
                className={s.imageContainer}
              >
                <Image src={image} alt="" className={s.image} layout="fill" />
              </Col>
              <Col
                md={{ span: 12, order: textPosition === "right" ? 2 : 1 }}
                xs={{ span: 24, order: textMobilePosition === "bottom" ? 2 : 1 }}
                className={s.descriptionContainer}
              >
                <Col span={24} className={s.description}>
                  <h1>{title}</h1>
                  <Col className={s.divider} />
                  <h4>{subtitle}</h4>
                  <p>{description}</p>
                </Col>
              </Col>
            </Row>
          </Col>
        </ThemesContainerMain>
      </Col>
    </>
  );
}

ThemesContentsHomepageV2OurRolesSection.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  textPosition: propTypes.oneOf(["right", "left"]),
  textMobilePosition: propTypes.oneOfType(["top", "bottom"]),
};

export default ThemesContentsHomepageV2OurRolesSection;
