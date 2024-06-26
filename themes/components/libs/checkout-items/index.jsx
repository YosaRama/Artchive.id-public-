// Libs
import { Col, Row, Image, Divider } from "antd";
import propTypes from "prop-types";

// Helper
import priceFormatter from "dashboard/helpers/priceFormatter";
import stringCapitalize from "dashboard/helpers/capitalize";

// Hooks
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesCheckoutItems(props) {
  const { imgUrl, title, artist, material, widthImage, heightImage, price } = props;
  const { width } = useWindowSize();
  return (
    <>
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col className={s.imgSrcContainer}>
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
            alt=""
            preview={false}
            className={s.imgSrc}
            onClick={() => router.push(`/artwork/${artworkUrl}`)}
          />
        </Col>
        <Col className={s.itemsContainer}>
          <h2 onClick={() => router.push(`/artwork/${artworkUrl}`)}>{title}</h2>
          <Col className={s.style}>
            <p>
              {`by `} <span style={{ fontWeight: "700" }}>{artist}</span>
            </p>
            <p>{stringCapitalize(material.replace(/_/g, " "))}</p>
            <p>
              {widthImage} {` x `} {heightImage} {`cm`}
            </p>
          </Col>
          {width > 500 && (
            <p className={s.itemPrice}>
              <span>{`IDR `}</span>
              {priceFormatter(`${price}`, `,`)}
            </p>
          )}
        </Col>
        {width < 500 && (
          <Col span={24}>
            <p className={s.mobileItemPrice}>
              <span>{`IDR `}</span>
              {priceFormatter(`${price}`, `,`)}
            </p>
          </Col>
        )}
      </Row>
      <Divider style={{ margin: "12px 0px " }} />
    </>
  );
}

export default ThemesCheckoutItems;
