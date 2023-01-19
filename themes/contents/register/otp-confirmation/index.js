// Libs
import { Col, Row, Image } from "antd";

//Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

function ThemesContentOtpConfirmation() {
  return (
    <Col className={s.container}>
      <ThemesContainerMain>
        <Col className={s.containerLogo}>
          <Image src="/images/otp-logo.png" alt="otp-logo" preview={false} className={s.otpLogo} />
        </Col>
        <ThemesHeadline
          title="Phone Number Verification"
          subtitle="You will get OTP number verification on +62 85 858 396 893"
        />
        <Col className={s.otp}></Col>
        <ThemesButton type={"primary " + s.btn}>VERIFY</ThemesButton>
        <p>
          Not receiving any OTP notification? <span className={s.resend}>Resend again</span>.
        </p>
      </ThemesContainerMain>
    </Col>
  );
}

export default ThemesContentOtpConfirmation;
