// Libs
import { Col, Row, Image, Form, Input } from "antd";
import propTypes from "prop-types";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { useRouter } from "next/router";

// Compoenent
import ThemesButton from "../../button";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";
import { useAuctionPhoneCtx } from "app/contexts/auction-phone";
import { ErrorNotification } from "app/components/utils/notification";

// Style
import s from "./index.module.scss";

function ThemesAuctionLoginForm(props) {
  const { handleModalStage, eventStatus, handleModalVisible } = props;
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const router = useRouter();
  const { id: auctionId } = router.query;
  const { phoneNumber } = useAuctionPhoneCtx();

  //#region Handle change input
  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    const otpCode = newOtp.join("");
    if (otpCode.length === 6) {
      // Auto-validate OTP when it reaches 6 characters
      handleVerification();
    }

    if (e.target.value.length === 1) {
      const nextIndex = index + 1;
      if (nextIndex < 6) {
        const nextInput = document.getElementById(`input-${nextIndex}`);
        nextInput?.focus();
      }
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
  const handleVerification = async () => {
    setLoading(true);
    const otpCode = otp.join("");

    const login = await signIn("credentials", {
      redirect: false,
      auctionId: auctionId,
      phone: phoneNumber,
      code: otpCode,
      type: "auction",
    });

    if (!login.error) {
      if (eventStatus === "LIVE") {
        window.location.reload();
      }
      if (eventStatus === "BEFORE") {
        handleModalStage("countdown");
      }
    } else {
      handleModalStage("login");
      ErrorNotification({ message: "Login Failed!", description: login.error });
    }
    setOtp(["", "", "", "", "", ""]);
    setLoading(false);
  };

  const handleCloseModal = () => {
    handleModalVisible();
    setTimeout(() => {
      setOtp(["", "", "", "", "", ""]);
    }, 500);
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
                              disabled={loading}
                            />
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Col>
              </Form.Item>
            </Form>

            <ThemesButton type={"primary " + s.btn} onClick={handleVerification} loading={loading}>
              VERIFY
            </ThemesButton>
            <ThemesButton type={"secondary " + s.btn} onClick={handleCloseModal} loading={loading}>
              BACK TO LOTS LIST
            </ThemesButton>
          </Col>
        </Col>
      </Col>
      {/* // * ====================================== * // */}
    </Row>
  );
}

propTypes.ThemesAuctionLoginForm = {
  onClick: propTypes.any,
  handleModalStage: propTypes.func,
  eventStatus: propTypes.oneOf(["BEFORE", "LIVE", "AFTER"]),
  handleModalVisible: propTypes.any,
};

export default ThemesAuctionLoginForm;
