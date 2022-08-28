// Libs
import { Col, Row, Image, Divider } from "antd";
import propTypes from "prop-types";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import stringCapitalize from "app/helpers/capitalize";

// Styles
import s from "./index.module.scss";

function ThemesCheckoutItems(props) {
  const { imgUrl, title, artist, material, width, height, price } = props;
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
              {width} {` x `} {height}
            </p>
          </Col>
          <p>
            <span style={{ fontWeight: "700" }}>{`IDR `}</span>

            {priceFormatter(`${price}`, `,`)}
          </p>
        </Col>
      </Row>
      <Divider style={{ margin: "12px 0px " }} />
    </>
  );
}

export default ThemesCheckoutItems;
