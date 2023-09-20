// Libs
import { Col, Row, Image, Form, Input } from "antd";
import propTypes from "prop-types";
import { useState } from "react";
import { useRouter } from "next/router";
import { LeftOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";

// Compoenent
import ThemesButton from "../../button";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Style
import s from "./index.module.scss";

function ThemesAuctionVerifyForm(props) {
  const { handleBack, handleModalStage, eventStatus, handleModalVisible } = props;
  const { width } = useWindowSize();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isThankYou, setIsThankYou] = useState(false);
  const router = useRouter();
  const { id: auctionId } = router.query;

  //#region Handle change input
  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value.length === 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      nextInput?.focus();
    }
  };
  //#endregion

  //#region Handle key down
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      const prevInput = document.getElementById(`input-${index - 1}`);
      prevInput?.focus();
    }

    if (/^[a-zA-Z0-9]{1}$/.test(e.key) && otp[index] !== "") {
      const newOtp = [...otp];
      newOtp[index] = e.key;
      setOtp(newOtp);
    }
  };
  //#endregion

  //#region Handle verification
  const [form] = Form.useForm();

  const handleVerification = async () => {
    //TODO: CHANGE THIS
    const otpParse = otp.join("");
    const otpCode = `${otpParse.slice(0, 3)}-${otpParse.slice(3)}`;
    const otpLocal = localStorage.getItem("otp_code");
    const isValid = await verifyPassword(otpCode, otpLocal);

    if (isValid) {
      const registrationData = {
        ...JSON.parse(localStorage.getItem("registration_data")),
        otpCode: otpCode,
      };
      const result = await onRegisterByPhone(registrationData);
      if (result) {
        const login = await signIn("credentials", {
          redirect: false,
          phone: router.query.phone,
          otp: otpCode,
          type: "phone",
        });
        if (!login.error) {
          if (eventStatus === "LIVE") {
            window.location.reload();
            handleModalVisible();
          }
          if (eventStatus === "BEFORE") {
            handleModalStage("countdown");
          }
        } else {
          ErrorNotification({ message: "Login Failed!", description: login.error });
          if (eventStatus === "LIVE") {
            handleModalStage("sorry");
          }
        }
      }
    } else {
      ErrorNotification({
        message: "OTP is not valid",
        description: "Please check your OTP on your phone, and resend if still not received any",
      });
    }
  };
  //#endregion
  return (
    <Row className={s.modalContainer}>
      {width > 768 && (
        <Col span={11} className={s.image}>
          <Image src="/images/modal-login.png" alt="" preview={false} />
        </Col>
      )}

      {/* //? ============== login Form ============= ?// */}
      <Col span={width > 769 ? 13 : 24} className={s.registerContainer}>
        <Col className={s.register}>
          <Col className={s.title}>
            <h3>Verification Required</h3>
            <p>Insert your PIN verification code</p>
          </Col>
          <Col>
            <Form>
              <Form.Item>
                <Col span={24} style={{ margin: "0 auto" }}>
                  <Row gutter={width >= 500 ? [16, 0] : 0} justify="space-between">
                    {otp.map((item, index) => {
                      return (
                        <>
                          <Col key={index} className={s.inputField}>
                            <Input
                              id={`input-${index}`}
                              type="text"
                              value={item}
                              onChange={(e) => handleChange(e, index)}
                              onKeyDown={(e) => handleKeyDown(e, index)}
                              maxLength={1}
                              className={s.input}
                              bordered={false}
                            />
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Col>
              </Form.Item>
            </Form>

            <ThemesButton type={"primary " + s.btn} onClick={handleVerification}>
              VERIFY
            </ThemesButton>
            <Col onClick={handleBack}>
              <p className={s.back}>Back to Participant Verification</p>
            </Col>
          </Col>
        </Col>
      </Col>
      {/* // * ====================================== * // */}
    </Row>
  );
}

propTypes.ThemesAuctionVerifyForm = {
  onClick: propTypes.any,
  handleModalStage: propTypes.func,
  eventStatus: propTypes.oneOf(["BEFORE", "LIVE", "AFTER"]),
  handleBack: propTypes.any,
  handleModalVisible: propTypes.any,
};

export default ThemesAuctionVerifyForm;
