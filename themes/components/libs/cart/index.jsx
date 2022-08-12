// Libs
import propTypes from "prop-types";
import { Col, Row, Image } from "antd";
import { useRouter } from "next/router";

// Helper
import priceFormatter from "/app/helpers/priceFormatter.js";

// Icons
import { BsTruck } from "react-icons/bs";
import { AiFillDelete, AiFillHeart } from "react-icons/ai";

// Styles
import s from "./index.module.scss";

function ThemesCartItem(props) {
  const { title, imgUrl, price, artist, material, width, height } = props;

  const router = useRouter();

  return (
    <>
      <Col className={s.cartContainer}>
        <Row gutter={[0, 10]} className={s.cartItemContainer}>
          <Col className={s.imgSrcContainer}>
            <Image
              preview={false}
              className={s.imgSrc}
              alt=""
              src={imgUrl}
              onClick={() => router.push(`/artwork/${title}`)}
            />
          </Col>
          <Col className={s.descContainer}>
            <h2 className={s.title} onClick={() => router.push(`/artwork/${title}`)}>
              {title}
            </h2>
            <p className={s.artist} style={{ fontWeight: "600" }}>
              {`by `}
              {artist}
            </p>
            <p className={s.material}>{material}</p>
            <p className={s.size}>{`${width} x ${height} cm`}</p>
          </Col>
          <Col className={s.priceContainer}>
            <h2 className={s.priceTitle}>Price</h2>
            <Col className={s.price}>
              <h2 style={{ fontWeight: "700" }}>{`IDR ${priceFormatter(price, ",")}`}</h2>
            </Col>
          </Col>
        </Row>
        <Row className={s.btnContainer}>
          <Col className={s.iconBtn}>
            <AiFillDelete style={{ fontSize: "24px" }} />
          </Col>
          <Col className={s.iconBtn}>
            <AiFillHeart style={{ fontSize: "24px" }} />
          </Col>
        </Row>

        <Col className={s.orderServices}>
          <h3>Order Services</h3>
          <p style={{ display: "flex", alignItems: "center" }}>
            <BsTruck style={{ fontSize: "24px", marginRight: "10px" }} /> {` `}
            Shipped from Indonesia
          </p>
        </Col>
      </Col>
    </>
  );
}

ThemesCartItem.propTypes = {
  imgSrc: propTypes.string,
  title: propTypes.string,
  artist: propTypes.string,
  price: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  material: propTypes.string,
};

export default ThemesCartItem;
