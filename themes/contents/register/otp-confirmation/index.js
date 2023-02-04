// Libs
import { Col, Row, Image, Input, Form } from "antd";
import { useState } from "react";

//Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

function ThemesContentOtpConfirmation() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value.length === 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      nextInput?.focus();
    }
    if (e.target.value.length === 0) {
      const prevInput = document.getElementById(`input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <Col>
      <ThemesContainerMain>
        <Col className={s.container}>
          <Col>
            <Col className={s.containerLogo}>
              <Image
                src="/images/otp-logo.png"
                alt="otp-logo"
                preview={false}
                className={s.otpLogo}
              />
            </Col>
            <ThemesHeadline
              title="OTP Verification"
              subtitle="You will receive OTP number verification on Whatsapp"
              //todo: GET NEW USER PHONE NUMBER AND REPLACE IT IN SUBTITLE
            />
          </Col>
          <Col>
            <Form>
              <Form.Item>
                <Input.Group>
                  <Col className={s.otp}>
                    <Col span={7} style={{ fontSize: "42px" }} className={s.input}>
                      <h1>ART -</h1>
                    </Col>
                    <Col span={16} style={{ display: "flex" }}>
                      {otp.map((item, index) => {
                        return (
                          <Col span={6} key={index}>
                            <Input
                              id={`input-${index}`}
                              type="text"
                              value={item}
                              onChange={(e) => handleChange(e, index)}
                              maxLength={1}
                              className={s.input}
                            />
                          </Col>
                        );
                      })}
                    </Col>
                  </Col>
                </Input.Group>
              </Form.Item>
            </Form>

            <ThemesButton type={"primary " + s.btn}>VERIFY</ThemesButton>
            <p>
              Not receiving any OTP notification? <span className={s.resend}>Resend again</span>.
            </p>
          </Col>
        </Col>
      </ThemesContainerMain>
    </Col>
  );
}

export default ThemesContentOtpConfirmation;
