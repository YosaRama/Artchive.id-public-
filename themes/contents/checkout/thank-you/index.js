// Libs
import { Col, Row, Spin } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { useState, useEffect } from "react";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesContainerMain from "themes/components/container/main";

// Icon
import { ThankyouIcon } from "public/icons/thankyou-icon";

// Hooks
import { useOrderLoad } from "app/hooks/order";

// Styles
import s from "./index.module.scss";

function ThemesCheckoutThankYou(props) {
  const router = useRouter();
  const { userId } = props;

  const {
    data: orderData,
    total,
    size,
    setSize,
    loading: orderLoading,
  } = useOrderLoad({
    limit: 5,
    queryString: `userId=${userId || ""}`,
  });

  //? ============== Handle Timeout ============= ?//
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    const timerChange = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer < 1) {
      router.push("/");
    }

    return () => clearTimeout(timerChange);
  }, [timer, router]);
  // * ====================================== * //

  return (
    <ThemesContainerMain>
      <Spin spinning={orderLoading}>
        <Col className={s.container}>
          <Col className={s.thankyouDescription}>
            <ThankyouIcon style={{ width: "auto" }} />
            <h1 style={{ margin: 0 }}>Thank You</h1>
            <h4>Your order is complete!</h4>
            <p className={s.description}>
              An email receipt including details about your order will be sent to the email address
              provided. Please keep it for your records.
            </p>
            <p style={{ fontWeight: "700", marginBottom: "16px" }}>
              ORDER ID: <span style={{ color: "#e5890a" }}>{orderData?.at(-1).order_id}</span>
            </p>
            <Row className={s.buttonContainer}>
              <ThemesButton
                onClick={() => router.push("/profile/transaction")}
                type={"default " + s.button}
              >
                ORDER STATUS
              </ThemesButton>
              <ThemesButton onClick={() => router.push("/")} type={"outlined " + s.button}>
                BACK TO HOME
              </ThemesButton>
            </Row>
            <p className={s.redirect}>
              You will be redirected to Homepage in {timer}
              ...
            </p>
            <p style={{ marginTop: "35px", color: "grey" }}>
              Have any issues?{" "}
              <span
                className={s.link}
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                contact us.
              </span>
            </p>
          </Col>
        </Col>
      </Spin>
    </ThemesContainerMain>
  );
}

ThemesCheckoutThankYou.propTypes = {
  userId: propTypes.number,
};

export default ThemesCheckoutThankYou;
