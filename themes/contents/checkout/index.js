// Libs
import { Col, Row } from "antd";

// Style
import s from "./index.module.scss";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesCheckoutForm from "themes/components/libs/checkout-form";
import ThemesCheckoutItems from "themes/components/libs/checkout-items";
import ThemesButton from "themes/components/libs/button";

// Dummy
import { cartListDummyData } from "app/database/dummy/cart";

function ThemesContentsCheckout() {
  return (
    <>
      <ThemesContainerMain>
        <ThemesHeadline title="CHECKOUT" className={s.headline} />
        <Col className={s.checkoutContainer}>
          <Col span={12}>
            <ThemesCheckoutForm />
          </Col>
          <Col span={11}>
            <Col className={s.checkoutItemContainer}>
              {cartListDummyData.map((item, index) => {
                return (
                  <Col key={index}>
                    <ThemesCheckoutItems
                      imgUrl={item.imgUrl}
                      price={item.price}
                      title={item.title}
                      artist={item.artist}
                      material={item.material}
                      width={item.width}
                      height={item.height}
                    />
                  </Col>
                );
              })}
              <Row>
                <Col style={{ width: "150px", marginRight: "24px", fontSize: "16px" }}>
                  <p style={{ fontWeight: "700" }}>{`Shipping Charge`} </p>
                </Col>
                <Col style={{ fontSize: "16px" }}>
                  {/* input data shipping charge */}
                  <span style={{ fontWeight: "700" }}>{`IDR `} </span> {`900.000`}
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
                {`IDR`} <span style={{ fontWeight: "400" }}>{`300.000`}</span>
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
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit? `}
              <span className={s.link}>Contact Us</span>
            </p>
            <Col style={{ marginTop: "24px", marginBottom: "24px" }}>
              <ThemesButton style={{ width: "160px", height: "80px" }}>SUBMIT</ThemesButton>
            </Col>
            <Col span={24} style={{ background: "white", padding: "24px", marginBottom: "24px" }}>
              LOGO LOGO BCA MIDTRANS
            </Col>
          </Col>
        </Col>
      </ThemesContainerMain>
    </>
  );
}

export default ThemesContentsCheckout;
