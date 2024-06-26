// Libs
import Image from "next/image";
import { Button, Col, Form, Input, Radio, Row, Tooltip, Checkbox } from "antd";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerTwoColumns from "themes/components/container/two-column";
import ThemesButton from "themes/components/libs/button";
import ThemesRadioWithImage from "themes/components/libs/radio-with-image";

// Helper
import { passwordFormRules } from "dashboard/helpers/passwordFormRules";
import { stringCapitalize } from "dashboard/helpers/capitalize";
import { hashPassword } from "dashboard/helpers/auth";

// Data Hook
import { useUsers } from "dashboard/hooks/user";
import { useMailer } from "dashboard/hooks/mailer";

// Styles
import s from "./index.module.scss";
import { useState } from "react";

function ThemesContentsRegister() {
  const router = useRouter();

  //#region Handle change phone code
  const [phoneCode, setPhoneCode] = useState("62");
  //#endregion

  //#region Handle registration
  const { onAdd, loading: addLoading, onRegisterValidation } = useUsers({ queryString: "" });
  const { onSendMail, loading: sendMailLoading } = useMailer({
    pathName: "/register/confirmation",
  });
  const [form] = Form.useForm();

  // Register by email
  const handleRegisterByEmail = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        email: value.email,
        fullName: stringCapitalize(value.fullName),
        password: value.password,
        role: value.role,
      };

      const result = await onAdd(submission);

      if (result) {
        const sendMail = await onSendMail({
          email: submission.email,
          fullName: submission.fullName,
        });
        if (sendMail) {
          const hashedEmail = await hashPassword(submission.email);
          router.push(
            `/register/confirmation/${encodeURIComponent(submission.email)}/${encodeURIComponent(
              hashedEmail
            )}`
          );
        }
      }
    });
  };

  // Register by phone
  const handleRegisterByPhone = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        phone: `${phoneCode}${value.phone}`,
        fullName: stringCapitalize(value.fullName),
        role: value.role,
      };

      const result = await onRegisterValidation(submission);

      if (result) {
        localStorage.setItem("registration_data", JSON.stringify(submission));
        router.push(`/register/otp-confirmation?phone=${phoneCode}${value.phone}`);
      }
    });
  };
  //#endregion

  //? ============== Handle Google Login ============= ?//
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/profile" });
  };
  // * ====================================== * //

  //? ============== Handle Facebook Login ============= ?//
  const handleFacebookLogin = () => {
    signIn("facebook", { callbackUrl: "/profile" });
  };
  // * ====================================== * //

  return (
    <ThemesContainerMain>
      <ThemesContainerTwoColumns imgSrc="/images/register-background.jpg" cardClassName="halo">
        <section style={{ textAlign: "center" }} className={s.section}>
          <Col span={24} className={s.title}>
            <h1>{"Get Started"}</h1>
          </Col>

          <section className={s.socialButtonSection}>
            <Col span={24}>
              <Button className={s.socialButton} onClick={handleGoogleLogin}>
                <Row align="middle">
                  <span className={s.socialButtonIcon}>
                    <Image src="/images/google-icon.png" alt="" layout="fill" objectFit="contain" />
                  </span>
                  <p>Continue With Google</p>
                </Row>
              </Button>
            </Col>
            <Col span={24}>
              <Button className={s.socialButton} onClick={handleFacebookLogin}>
                <Row>
                  <span className={s.socialButtonIcon}>
                    <Image
                      src="/images/facebook-icon.png"
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </span>
                  <p>Continue With Facebook</p>
                </Row>
              </Button>
            </Col>
          </section>

          <section className={s.formSection}>
            <Col span={24}>
              <Col style={{ textAlign: "left", padding: "0px" }}>
                <p>
                  <ExclamationCircleOutlined /> Hello Artchive.id users! Now you can register your
                  account with just your{" "}
                  <span style={{ color: "#e5890a" }}>phone number or Whatsapp number</span>.
                </p>
              </Col>
              <Form layout="vertical" form={form}>
                <Form.Item name="phone" label="Phone Number">
                  <Input
                    addonBefore={`+${phoneCode}`}
                    placeholder="Phone Number or Whatsapp Number"
                  />
                </Form.Item>
                <Form.Item
                  name="fullName"
                  rules={[
                    { required: true, type: "string", message: "Please input your full name!" },
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Col span={24} style={{ margin: "50px 0 0" }}>
                  <h1 style={{ fontSize: 24, marginBottom: 20 }}>Who Are You ?</h1>
                  <Form.Item
                    name="role"
                    rules={[{ required: true, message: "Please select your role!" }]}
                  >
                    <Radio.Group style={{ width: "100%" }}>
                      <Row gutter={[16, 0]}>
                        <Tooltip title="Your role as an Artist is to show and archive artwork.">
                          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                            <ThemesRadioWithImage
                              value="ARTIST"
                              imgSrc="/images/frontpage-artist-icon.png"
                            >
                              Artist
                            </ThemesRadioWithImage>
                          </Col>
                        </Tooltip>
                        <Tooltip title="Your role as a Collector is to show your artwork collection, trade artwork with other collector, and do auction.">
                          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                            <ThemesRadioWithImage
                              value="COLLECTOR"
                              imgSrc="/images/frontpage-collector-icon.png"
                            >
                              Collector
                            </ThemesRadioWithImage>
                          </Col>
                        </Tooltip>
                        <Tooltip title="Your role as a Gallery is to show your gallery collection.">
                          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                            <ThemesRadioWithImage
                              value="GALLERY"
                              imgSrc="/images/frontpage-gallery-icon.png"
                            >
                              Gallery
                            </ThemesRadioWithImage>
                          </Col>
                        </Tooltip>
                      </Row>
                    </Radio.Group>
                  </Form.Item>
                </Col>

                <Row justify="space-between">
                  <Col>
                    <Checkbox>I Accept The Terms & Condition & Privacy Policy</Checkbox>
                  </Col>
                </Row>
              </Form>
            </Col>
          </section>

          <Col span={24}>
            <ThemesButton
              type={"default " + s.button}
              onClick={handleRegisterByPhone}
              loading={addLoading || sendMailLoading}
            >
              SIGN UP
            </ThemesButton>
          </Col>
          <Col span={24}>
            <ThemesButton type={"outlined " + s.button} onClick={() => router.push("/signin")}>
              LOG IN
            </ThemesButton>
          </Col>
        </section>
      </ThemesContainerTwoColumns>
    </ThemesContainerMain>
  );
}

export default ThemesContentsRegister;
