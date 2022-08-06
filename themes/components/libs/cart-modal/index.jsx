// Libs
import React from "react";
import { Col } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesCartModalItemDesc from "./cart-modal-item-desc";

// DummyData
import { artworkListDummyData } from "app/database/dummy/artwork";
// Styles
import s from "./index.module.scss";

function ThemesCartModal() {
  const router = useRouter();

  return (
    <>
      <Col className={s.modalItemContainer}>
        {artworkListDummyData.map((item, index) => {
          return (
            <ThemesCartModalItemDesc
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              artist={item.artist}
              price={item.price}
            />
          );
        })}
      </Col>
      <Col className={s.priceTotal}>
        <span style={{ fontWeight: "700" }}>{`Total Price : IDR XXX.XXX.XXX`}</span>
      </Col>
      <ThemesButton type={"default " + s.cartBtn} onClick={() => router.push("/cart")}>
        {" "}
        Go To Cart
      </ThemesButton>
    </>
  );
}

export default ThemesCartModal;
