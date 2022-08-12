// Libs
import { Popover, Button, Col, Row, Empty } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";

// Components
import ThemesCartModalItemDesc from "themes/components/libs/cart-modal/cart-modal-item-desc";
import ThemesButton from "themes/components/libs/button";

// Icons
import { CartIcon } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";

// Dummy
import { cartListDummyData } from "app/database/dummy/cart";

function ThemesHeaderCart() {
  const router = useRouter();

  //? ============== useState Empty ============= ?//
  const [emptyCartModal, setEmptyCartModal] = useState(false);
  // * ====================================== * //

  const ModalItemCart = (
    <>
      {/* //? ============== Cart Filled ============= ?// */}
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

      {/* //? ============== Cart Empty ============= ?// */}
      {emptyCartModal && (
        <Empty imageStyle={{ height: 60, marginTop: "20px" }} description="Empty Cart" />
      )}

      {/* //? ============== Cart Price ============= ?// */}
      <Col className={s.priceTotal}>
        {`Total: IDR `} <span style={{ fontWeight: "400" }}>{`1.000.000.000`}</span>
      </Col>

      {/* //? ============== Cart Button ============= ?// */}
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <ThemesButton type={"outlined " + s.cartBtn} onClick={() => router.push("/cart")}>
            {" "}
            Go To Cart
          </ThemesButton>
        </Col>

        <Col span={12}>
          <ThemesButton
            type={"default " + s.cartBtn}
            onClick={() => router.push("/checkout")}
            disabled={emptyCartModal}
          >
            {" "}
            Proceed
          </ThemesButton>
        </Col>
      </Row>
    </>
  );
  return (
    <>
      <Popover placement="bottomRight" content={ModalItemCart} trigger="hover" arrowPointAtCenter>
        <Button shape="round" type="link">
          <CartIcon style={{ width: "25px" }} />
        </Button>
      </Popover>
    </>
  );
}

export default ThemesHeaderCart;
