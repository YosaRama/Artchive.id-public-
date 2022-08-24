// Libs
import { Popover, Button, Col, Row, Empty, Divider } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// Components
import ThemesCartModalItemDesc from "themes/components/libs/cart-modal/cart-modal-item-desc";
import ThemesButton from "themes/components/libs/button";

// Hooks
import { useCarts } from "app/hooks/cart";

// Helpers
import priceFormatter from "app/helpers/priceFormatter";

// Icons
import { CartIcon } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";

function ThemesHeaderCart() {
  const router = useRouter();

  //? ============== Handle User ============= ?//
  const { data: session } = useSession();
  const userId = session.user.id;
  // * ====================================== * //

  //? ============== Cart Hooks ============= ?//
  const { data: cartItem } = useCarts({ queryString: `id=${userId}` }); //TODO : Change ID with current user ID//
  // * ====================================== * //

  //? ============== Handle Total ============= ?//
  const cartTotal = cartItem?.map((item) => +item.artwork.markup_price).reduce((a, b) => a + b, 0);
  // * ====================================== * //

  const ModalItemCart = (
    <>
      {/* //? ============== Cart Filled ============= ?// */}
      {cartItem?.length != 0 && (
        <Col className={s.modalItemContainer}>
          {cartItem?.map((item, index) => {
            return (
              <ThemesCartModalItemDesc
                key={index}
                imgUrl={item.artwork.media_cover.url}
                title={item.artwork.title}
                artist={item.artwork.artist.full_name}
                price={item.artwork.markup_price}
                artworkUrl={item.artwork.slug}
              />
            );
          })}
        </Col>
      )}

      {/* //? ============== Cart Empty ============= ?// */}
      {cartItem?.length == 0 && (
        <Empty imageStyle={{ height: 60, marginTop: "20px" }} description="Empty Cart" />
      )}

      {/* //? ============== Cart Price ============= ?// */}
      <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
      <Col className={s.priceTotal}>
        {`Total: IDR `}{" "}
        <span style={{ fontWeight: "400", paddingLeft: 5 }}>
          {priceFormatter(`${cartTotal}`, ",")}
        </span>
      </Col>
      <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />

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
            disabled={cartItem?.length == 0}
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
      <Popover
        zIndex={2}
        placement="bottomRight"
        content={ModalItemCart}
        trigger="hover"
        arrowPointAtCenter
      >
        <CartIcon style={{ width: "30px", marginRight: "20px" }} />
      </Popover>
    </>
  );
}

export default ThemesHeaderCart;
