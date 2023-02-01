// Libs
import { Col, Row, Image, Input, Form } from "antd";

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

        <Form>
          <Form.Item>
            <Input.Group>
              <Row className={s.otp}>
                <Col span={6} style={{ fontSize: "32px" }}>
                  <h1>ART -</h1>
                </Col>

                <Col span={3}>
                  <Input
                    placeholder="0"
                    bordered={true}
                    maxLength={1}
                    size="large"
                    className={s.placeholder}
                    autoSize={true}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    placeholder="0"
                    bordered={true}
                    maxLength={1}
                    size="large"
                    className={s.placeholder}
                    autoSize={true}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    placeholder="0"
                    bordered={true}
                    maxLength={1}
                    size="large"
                    className={s.placeholder}
                    autoSize={true}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    placeholder="0"
                    bordered={true}
                    maxLength={1}
                    size="large"
                    className={s.placeholder}
                    autoSize={true}
                  />
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
        </Form>

        <ThemesButton type={"primary " + s.btn}>VERIFY</ThemesButton>
        <p>
          Not receiving any OTP notification? <span className={s.resend}>Resend again</span>.
        </p>
      </ThemesContainerMain>
    </Col>
  );
}

export default ThemesContentOtpConfirmation;
