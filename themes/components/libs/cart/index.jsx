// Libs
import React from "react";
import { Col, Row, Image } from "antd";
import propTypes from "prop-types";
import { BsTruck } from "react-icons/bs";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { Router, useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

function ThemesCartItem(props) {
  const { title, imgUrl, price, artist, material, width, height } = props;
  return (
    <>
      <Col className={s.cartContainer}>
        <Row span={20} className={s.cartItemContainer}>
          <Col className={s.imgSrcContainer}>
            <Image
              preview={false}
              className={s.imgSrc}
              alt=""
              src={imgUrl}
              onClick={() => Router.push(`/artwork/${title}`)}
            />
          </Col>
          <Row className={s.container}>
            <Col className={s.descContainer}>
              <h2 className={s.title} onClick={() => Router.push(`/artwork/${title}`)}>
                {title}
              </h2>
              <p className={s.artist} style={{ fontWeight: "600" }}>
                {`by `}
                {artist}
              </p>
              <p className={s.material}>{material}</p>
              <p className={s.size}>
                {width}
                {` x `}
                {height}
                {` cm`}
              </p>
            </Col>
            <Col className={s.priceContainer}>
              <h2>Price</h2>
              <Col className={s.price}>
                <h2 style={{ fontWeight: "700" }}>
                  {`IDR `}
                  {price}
                </h2>
              </Col>
            </Col>
          </Row>
          <Col className={s.btnContainer}>
            <Col>
              <AiOutlineHeart className={s.iconBtn} />
            </Col>
            <Col>
              <AiFillDelete className={s.iconBtn} />
            </Col>
          </Col>
        </Row>

        <Col className={s.orderServices}>
          <h3>Order Services</h3>
          <p>
            <BsTruck /> {` `}
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
