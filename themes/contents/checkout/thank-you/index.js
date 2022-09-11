// Libs
import { Col, Row } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesContainerMain from "themes/components/container/main";

// Icon
import { ThankyouIcon } from "public/icons/thankyou-icon";

// Styles
import s from "./index.module.scss";
import { useEffect, useState } from "react";

function ThemesCheckoutThankYou() {
  const router = useRouter();

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
      <Col className={s.container}>
        <Col className={s.thankyouDescription}>
          <ThankyouIcon style={{ width: "auto" }} />
          <h1>Thank You</h1>
          <h4>Your order was completely successfully</h4>
          <Col style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <p className={s.description}>
              An email receipt including details about your order has been sent to the email address
              provided. Please keep it for your records.
            </p>
          </Col>
          {/* <Row gutter={[20, 20]} className={s.buttonContainer}> */}
          <ThemesButton onClick={() => router.push("/")} type={"default " + s.button}>
            BACK TO HOME
          </ThemesButton>
          {/* <ThemesButton onClick={() => router.push("/profile")} type={"default " + s.button}>
              BACK TO HOME
            </ThemesButton> */}
          {/* </Row> */}
          <p className={s.redirect}>You will be redirected to Homepage in {timer} ...</p>
          <p>
            Have any issues?{" "}
            <span
              className={s.link}
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >{` contact us.`}</span>
          </p>
        </Col>
      </Col>
    </ThemesContainerMain>
  );
}

export default ThemesCheckoutThankYou;
