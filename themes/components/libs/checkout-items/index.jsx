// Libs
import { Col, Row, Image } from "antd";
import propTypes from "prop-types";

// Styles
import s from "./index.module.scss";

function ThemesCheckoutItems(props) {
  const { imgUrl, title, artist, material, width, height, price } = props;
  return (
    <>
      <Row>
        <Col className={s.imgContainer}>
          <Image
            src={imgUrl}
            alt=""
            className={s.imgSrc}
            height={"150px"}
            width={"150px"}
            preview={false}
          />
        </Col>
        <Col className={s.itemsContainer}>
          <h2>{title}</h2>
          <Col className={s.style}>
            <p>
              {`by `} <span style={{ fontWeight: "700" }}>{title}</span>
            </p>
            <p>{material}</p>
            <p>
              {width} {` x `} {height}
            </p>
          </Col>
          <p>
            <span style={{ fontWeight: "700" }}>{`IDR `}</span>

            {price}
          </p>
        </Col>
      </Row>
    </>
  );
}

export default ThemesCheckoutItems;
