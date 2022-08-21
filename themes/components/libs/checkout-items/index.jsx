// Libs
import { Col, Row, Image } from "antd";
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
      <Row>
        <Col className={s.imgContainer}>
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
            alt=""
            className={s.imgSrc}
            height={"150px"}
            width={"150px"}
            preview={false}
            onClick={() => router.push(`/artwork/${artworkUrl}`)}
          />
        </Col>
        <Col className={s.itemsContainer}>
          <h2>{title}</h2>
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
    </>
  );
}

export default ThemesCheckoutItems;
