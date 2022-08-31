// Libs
import { Col } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesButton from "themes/components/libs/button";

// Icon
import { ThankyouIcon } from "public/icons/thankyou-icon";

// Styles
import s from "./index.module.scss";

function ThemesThankyou() {
  const router = useRouter();
  return (
    <>
      <Col className={s.thankyouContainer}>
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
          <ThemesButton onClick={() => router.push("/")}>BACK TO HOME</ThemesButton>
          <p>
            If you have any issues{" "}
            <span
              className={s.link}
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >{` contact us.`}</span>
          </p>
        </Col>
      </Col>
    </>
  );
}

export default ThemesThankyou;
