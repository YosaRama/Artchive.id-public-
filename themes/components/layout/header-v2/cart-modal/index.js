// Libs
import { Popover, Button, Col, Row, Empty, Divider } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";

// Components
import ThemesCartModalItemDesc from "themes/components/libs/cart-modal/cart-modal-item-desc";
import ThemesButton from "themes/components/libs/button";

// Hooks
import { useCarts } from "app/hooks/cart";

// Helpers
import priceFormatter from "app/helpers/priceFormatter";

// Icons
import { CartIcon } from "public/icons/cart-icon";
import { ExclamationCircleOutlined } from "@ant-design/icons";

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

  //? ============== Status List Handle ============= ?//
  const statusList = cartItem && cartItem?.every((item) => item.artwork.status == "PUBLISH");
  // * ====================================== * //

  const ModalItemCart = (
    <>
      {/* //? ============== Cart Filled ============= ?// */}
      {cartItem?.length != 0 && (
        <Col className={s.modalItemContainer}>
          {cartItem?.map((item, index) => {
            return (
              <>
                <ThemesCartModalItemDesc
                  key={index}
                  imgUrl={item.artwork.media_cover.url}
                  title={item.artwork.title}
                  artist={item.artwork.artist.full_name}
                  price={item.artwork.markup_price}
                  artworkUrl={item.artwork.slug}
                />
                {item.artwork.status == "SOLD" && (
                  <Col className={s.warningSold}>
                    <ExclamationCircleOutlined style={{ marginRight: "4px", color: "red" }} />
                    Sorry,
                    <span style={{ fontWeight: 600 }}> {item.artwork.title} </span>
                    {` `} has been sold. Remove this item from your cart to continue checkout.
                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
                  </Col>
                )}
              </>
            );
          })}
        </Col>
      )}

      {/* //? ============== Cart Empty ============= ?// */}
      {cartItem?.length == 0 && (
        <Empty imageStyle={{ height: 60, margin: "20px 0px" }} description="Empty Cart" />
      )}

      {/* //? ============== Cart Price ============= ?// */}
      {/* <Divider style={{ marginTop: "10px", marginBottom: "10px" }} /> */}
      <Col className={s.priceTotal}>
        {`Total: `}{" "}
        <span style={{ fontWeight: "700", paddingLeft: 5 }}>
          {priceFormatter(`IDR ${cartTotal}`, ",")}
        </span>
      </Col>
      <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />

      {/* //? ============== Cart Button ============= ?// */}
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <ThemesButton type={"outlined " + s.cartBtn} onClick={() => router.push("/cart")}>
            {" "}
            GO TO CART
          </ThemesButton>
        </Col>

        <Col span={12}>
          <ThemesButton
            type={"default " + s.cartBtn}
            onClick={() => router.push("/checkout")}
            disabled={cartItem == 0 ? true : statusList === false ? true : false}
          >
            {" "}
            PROCEED
          </ThemesButton>
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <Popover
        zIndex={10}
        placement="bottomRight"
        content={ModalItemCart}
        trigger="hover"
        arrowPointAtCenter
      >
        {/* <Link href="/cart"> */}
        <a>CART</a>
        {/* </Link> */}
      </Popover>
    </>
  );
}

export default ThemesHeaderCart;
