// Libs
import { Col, Row, Image, Input, Form, Result } from "antd";
import { ErrorNotification } from "app/components/utils/notification";
import { verifyPassword } from "app/helpers/auth";
import { useUsers } from "app/hooks/user";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

//Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

export default function ThemesContentRegisterOtpConfirmation() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isThankYou, setIsThankYou] = useState(false);
  const router = useRouter();

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
  const { onRegisterByPhone } = useUsers({ queryString: "" });
  const handleVerification = async () => {
    const otpParse = otp.join("");
    const otpCode = `ART-${otpParse.slice(0, 3)}-${otpParse.slice(3)}`;
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
          setIsThankYou(true);
        } else {
          ErrorNotification({ message: "Login Failed!", description: login.error });
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
    <Col>
      <ThemesContainerMain>
        {!isThankYou ? (
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
              />
            </Col>
            <Col>
              <Form>
                <Form.Item>
                  <Col span={10} style={{ margin: "0 auto" }}>
                    <Row justify={"center"} className={s.otp} gutter={[16, 0]}>
                      <Col span={3} className={s.input}>
                        <h1>ART</h1>
                      </Col>
                      <Col span={1} className={s.input}>
                        <h1>-</h1>
                      </Col>
                      <Col span={20} style={{ display: "flex" }}>
                        <Row gutter={[16, 0]}>
                          {otp.map((item, index) => {
                            if (index === 3) {
                              return (
                                <>
                                  <Col span={1} className={s.input}>
                                    <h1>-</h1>
                                  </Col>
                                  <Col key={index} className={s.inputField}>
                                    <Input
                                      id={`input-${index}`}
                                      type="text"
                                      value={item}
                                      onChange={(e) => handleChange(e, index)}
                                      onKeyDown={(e) => handleKeyDown(e, index)}
                                      maxLength={1}
                                      className={s.input}
                                    />
                                  </Col>
                                </>
                              );
                            } else {
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
                                    />
                                  </Col>
                                </>
                              );
                            }
                          })}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Form.Item>
              </Form>

              <ThemesButton type={"primary " + s.btn} onClick={handleVerification}>
                VERIFY
              </ThemesButton>
              <p>
                Not receiving any OTP notification? <span className={s.resend}>Resend again</span>.
              </p>
            </Col>
          </Col>
        ) : (
          ""
        )}

        {isThankYou ? (
          <div className={s.thankyou_container}>
            <Result
              status={"success"}
              title="Welcome to Artchive.id!"
              subTitle="Transform your home or office into a stunning masterpiece with our exclusive collection of artwork. Shop now and elevate your space!"
              extra={
                <>
                  <ThemesButton onClick={() => router.push("/profile")}>Go to Profile</ThemesButton>
                </>
              }
            />
          </div>
        ) : (
          ""
        )}
      </ThemesContainerMain>
    </Col>
  );
}
