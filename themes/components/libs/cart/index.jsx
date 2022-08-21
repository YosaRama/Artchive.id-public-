// Libs
import propTypes from "prop-types";
import { Col, Row, Image } from "antd";
import { useRouter } from "next/router";

// Helper
import priceFormatter from "/app/helpers/priceFormatter.js";
import stringCapitalize from "app/helpers/capitalize";

// Icons
import { BsTruck } from "react-icons/bs";
import { AiFillDelete, AiFillHeart } from "react-icons/ai";

import { useSession } from "next-auth/react";
import { useCarts } from "app/hooks/cart";

// Styles
import s from "./index.module.scss";

function ThemesCartItem(props) {
  const { title, imgUrl, price, artist, material, width, height, artworkUrl, cartId } = props;

  const router = useRouter();

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  //? ============== Cart Hooks ============= ?//
  const { data: cartItem } = useCarts({ queryString: `id=${userId}` }); //TODO : Change ID with current user ID//
  // * ====================================== * //

  const { artworkData } = props;

  //? ============== Cart Hooks ============= ?//
  const { onDelete } = useCarts({ queryString: "" });
  // * ====================================== * //

  return (
    <>
      <Col className={s.cartContainer}>
        <Row gutter={[0, 10]} className={s.cartItemContainer}>
          <Col className={s.imgSrcContainer}>
            <Image
              preview={false}
              className={s.imgSrc}
              alt=""
              src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
              onClick={() => router.push(`/artwork/${artworkUrl}`)}
            />
          </Col>
          <Col className={s.descContainer}>
            <h2 className={s.title} onClick={() => router.push(`/artwork/${artworkUrl}`)}>
              {title}
            </h2>
            <p className={s.artist} style={{ fontWeight: "600" }}>
              {`by `}
              {artist}
            </p>
            <p className={s.material}>{stringCapitalize(material.replace(/_/g, " "))}</p>
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
          <Col
            className={s.iconBtn}
            onClick={() => {
              onDelete(cartId);
            }}
          >
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
  artworkUrl: propTypes.string,
  cartId: propTypes.number,
};

export default ThemesCartItem;
