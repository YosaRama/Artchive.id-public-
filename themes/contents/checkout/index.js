// Libs
import { Col, Form, Row } from "antd";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import moment from "moment";
import { RightOutlined } from "@ant-design/icons";

// Style
import s from "./index.module.scss";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesCheckoutForm from "themes/components/libs/checkout-form";
import ThemesCheckoutItems from "themes/components/libs/checkout-items";
import ThemesButton from "themes/components/libs/button";
import ThemesCheckoutLogoPayment from "themes/components/libs/checkout-logo-payment";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Hooks
import { useCarts } from "app/hooks/cart";
import { usePayments } from "app/hooks/payment";

// Dummy
import { logoDummy } from "app/database/dummy/checkout-logo";

function ThemesContentsCheckout() {
  const router = useRouter();

  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;

  //? ============== Cart Page Hook ============= ?//
  const { data: cartCheckoutItem, onDeleteCart } = useCarts({ queryString: `id=${userId}` });
  // * ====================================== * //

  //? ============== Handle Total ============= ?//
  const cartTotal = cartCheckoutItem
    ?.map((item) => +item.artwork.markup_price)
    .reduce((a, b) => a + b, 0);
  // * ====================================== * //

  //? ============== Order Hooks ============= ?//
  const { onTransaction } = usePayments({ queryString: "" });
  // * ====================================== * //

  //? ============== Handle Checkout ============= ?//
  const [form] = Form.useForm();
  const handleTransaction = () => {
    form.validateFields().then((value) => {
      const submission = {
        items: cartCheckoutItem.map((item) => {
          return {
            id: item.artwork.id,
            sku: item.artwork.sku,
            name: item.artwork.title,
            quantity: 1,
            price: +item.artwork.markup_price,
          };
        }),
        orderId: `ARTCHIVEID/ORDER/USR-${userId}/${moment().format("x")}`,
        total: cartTotal,
        userEmail: session?.user.email,
        shippingFirstName: value.recipientName,
        shippingPhone: value.phoneNumber,
        shippingAddress: value.address,
        shippingCity: value.city,
        shippingCountry: value.country,
        shippingPostalCode: value.zipCode,
        transactionTime: moment().format(),
        notes: value.notes,
        userId: userId,
      };
      onTransaction(submission);
    });
  };

  // * ====================================== * //

  return (
    <>
      <ThemesContainerMain>
        <ThemesHeadline title="CHECKOUT" className={s.headline} />
        <Row className={s.checkoutContainer}>
          <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
            <ThemesCheckoutForm form={form} />
          </Col>
          <Col xl={{ span: 11 }} lg={{ span: 11 }} md={{ span: 11 }} xs={{ span: 24 }}>
            <Col className={s.checkoutItemContainer}>
              {cartCheckoutItem?.map((item, index) => {
                return (
                  <Col key={index}>
                    <ThemesCheckoutItems
                      imgUrl={item.artwork.media_cover.url}
                      price={item.artwork.markup_price}
                      title={item.artwork.title}
                      artist={item.artwork.artist.full_name}
                      material={item.artwork.material}
                      widthImage={item.artwork.width}
                      heightImage={item.artwork.height}
                      artworkUrl={item.artwork.slug}
                    />
                  </Col>
                );
              })}
              <Row style={{ display: "felx", justifyContent: "space-between" }}>
                <Col style={{ width: "150px", fontSize: "16px" }}>
                  <p style={{ fontWeight: "700" }}>{`Shipping Charge`} </p>
                </Col>
                <Col className={s.shipingCharge}>
                  {/* input data shipping charge */}
                  <span style={{ fontWeight: "700" }}>{`IDR `} </span> {`0`}
                </Col>
              </Row>
              <Col
                style={{ fontSize: "16px", fontWeight: "700", lineHeight: "24px" }}
              >{`Shipping from Indonesia`}</Col>
            </Col>
            <Col className={s.totalPrice}>
              <h2>{`Total:`}</h2>
              <h2 style={{ color: "#e5890a", fontFamily: "Aileron" }}>
                {/* total price data is here */}
                {`IDR`}{" "}
                <span style={{ fontWeight: "400" }}>{priceFormatter(`${cartTotal}`, ",")}</span>
              </h2>
            </Col>
            <Col
              style={{
                padding: "24px",
                background: "white",
                margin: "24px 0px",
                borderRadius: "10px",
              }}
            >
              <h2>Guarantee</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum euismod mattis sed
                enim sed pulvinar.
              </p>
            </Col>
            <p style={{ color: "#e5890a" }}>
              {`Got trouble with your transaction? `}
              <span
                className={s.link}
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              >
                Contact Us
              </span>
            </p>
            <Col style={{ marginTop: "24px", marginBottom: "24px" }}>
              <ThemesButton type={"default " + s.button} onClick={handleTransaction}>
                PROCEED <RightOutlined />
              </ThemesButton>
            </Col>
            <Col span={24} className={s.logoPaymentContainer}>
              {logoDummy.map((item, index) => {
                return <ThemesCheckoutLogoPayment key={index} logo={item.logo} />;
              })}
            </Col>
          </Col>
        </Row>
      </ThemesContainerMain>
    </>
  );
}

export default ThemesContentsCheckout;
