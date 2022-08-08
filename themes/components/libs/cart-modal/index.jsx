// Libs
import React, { useState } from "react";
import { Col, Empty } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesCartModalItemDesc from "./cart-modal-item-desc";

// DummyData
import { cartListDummyData } from "app/database/dummy/cart";

// Styles
import s from "./index.module.scss";

function ThemesCartModal() {
  const router = useRouter();

  //? ============== useState Empty ============= ?//
  const [emptyCartModal, setEmptyCartModal] = useState(false);
  // * ====================================== * //

  return (
    <>
      {!emptyCartModal && (
        <Col className={s.modalItemContainer}>
          {cartListDummyData.map((item, index) => {
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
      )}
      {emptyCartModal && (
        <Empty imageStyle={{ height: 60, marginTop: "20px" }} description="Empty Cart" />
      )}
      <Col className={s.priceTotal}>
        {`Total: IDR `} <span style={{ fontWeight: "400" }}>{`1.000.000.000`}</span>
      </Col>

      <ThemesButton type={"default " + s.cartBtn} onClick={() => router.push("/cart")}>
        {" "}
        Go To Cart
      </ThemesButton>
    </>
  );
}

export default ThemesCartModal;
