/* eslint-disable jsx-a11y/alt-text */

// Libs
import propTypes from "prop-types";
import { Col, Image, Row } from "antd";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

function ThemesThumbnailCard(props) {
  const { title, subtitle, profile, url, imageWidthDesktop, imageWidthMobile, className } = props;
  const router = useRouter();

  //? ============== Handle Go to link ============= ?//
  const handleGoToLink = () => {
    router.push(url);
  };
  // * ====================================== * //

  return (
    <>
      <Row gutter={32} align="middle" className={className && className}>
        <Col
          sm={{ span: imageWidthDesktop ? imageWidthDesktop : 6 }}
          xs={{ span: imageWidthMobile ? imageWidthMobile : 10 }}
        >
          <a onClick={url ? handleGoToLink : () => {}}>
            <Image
              src={
                profile
                  ? `${process.env.NEXT_PUBLIC_S3_URL}/${profile}`
                  : "/images/default-images.jpg"
              }
              className={s.image}
              preview={false}
            />
          </a>
        </Col>
        <Col
          sm={{ span: imageWidthDesktop ? 24 - imageWidthDesktop : 18 }}
          xs={{ span: imageWidthDesktop ? 24 - imageWidthMobile : 14 }}
        >
          <a onClick={url ? handleGoToLink : () => {}}>
            <h1 style={{ marginBottom: 0 }} className={`${s.title}`}>
              {title && title}
            </h1>
          </a>

          <p style={{ marginBottom: 0 }} className={`${s.subtitle} `}>
            {subtitle && subtitle}
          </p>
        </Col>
      </Row>
    </>
  );
}

ThemesThumbnailCard.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  profile: propTypes.string,
  url: propTypes.string,
  imageWidthDesktop: propTypes.number,
  imageWidthMobile: propTypes.number,
  className: propTypes.string,
};

export default ThemesThumbnailCard;
