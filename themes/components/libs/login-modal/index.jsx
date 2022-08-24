// Libs
import propTypes from "prop-types";
import { Button, Checkbox, Col, Form, Input, Row, Image, Divider, Radio } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { CloseCircleOutlined } from "@ant-design/icons";

// Components
import ThemesModal from "../modal-container";
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerTwoColumns from "themes/components/container/two-column";
import ThemesButton from "themes/components/libs/button";
import ThemesRadioWithImageModalLogin from "themes/components/libs/login-modal/radio-login-modal";
import { ErrorNotification, WarningNotification } from "app/components/utils/notification";

// Hooks
import { useUsers } from "app/hooks/user";

import { useMailer } from "app/hooks/mailer";

// Helper
import { passwordFormRules } from "app/helpers/passwordFormRules";
import { stringCapitalize } from "app/helpers/capitalize";
import { hashPassword } from "app/helpers/auth";

// Styles
import s from "./index.module.scss";

function ThemesLoginModal(props) {
  const { visible, onCancel } = props;
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Handle Login to Register, Vice Versa ============= ?//
  const [modal, setModal] = useState(true);

  // * ====================================== * //

  //? ============== Handle Google Login ============= ?//
  const handleGoogleLogin = () => {
    signIn("google");
  };
  // * ====================================== * //

  //? ============== Handle Facebook Login ============= ?//
  const handleFacebookLogin = () => {
    signIn("facebook");
  };
  // * ====================================== * //

  //? ============== Handle Credentials Login ============= ?//
  const [loading, setLoading] = useState(false);
  // const { onSendMail } = useMailer({ pathName: "/register/confirmation" });

  const handleLogin = () => {
    form.validateFields().then(async (value) => {
      setLoading(true);
      const login = await signIn("credentials", {
        redirect: false,
        email: value.email,
        password: value.password,
      });
      if (!login.error) {
        router.push("/profile");
        setLoading(false);
      } else if (login.error == "INACTIVE") {
        const sendMail = await onSendMail({
          email: value.email,
          fullName: value.email,
        });
        if (sendMail) {
          const hashedEmail = await hashPassword(value.email);
          router.push(
            `/register/confirmation/${encodeURIComponent(value.email)}/${encodeURIComponent(
              hashedEmail
            )}`
          );
        }
        WarningNotification({
          message: "User Activation",
          description: "User account doesn't active, Please activation your account",
        });
        setLoading(false);
      } else {
        ErrorNotification({ message: "Login Failed!", description: login.error });
        setLoading(false);
      }
    });
  };
  // * ====================================== * //

  //? ============== Handle Register ============= ?//
  const { onAdd, loading: addLoading } = useUsers({ queryString: "" });
  const { onSendMail, loading: sendMailLoading } = useMailer({
    pathName: "/register/confirmation",
  });

  const handleRegister = () => {
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
  const destroyAll = () => {
    Modal.destroyAll();
  };

  return (
    <>
      <ThemesModal
        centered={true}
        footer={null}
        closable={true}
        visible={visible}
        onCancel={onCancel}
        width={800}
        closeIcon={
          <CloseCircleOutlined onClick={() => setModal(true)} style={{ fontSize: "20px" }} />
        }
      >
        <div style={{ height: 650 }}>
          <Row justify="center">
            <Col span={12} style={{ zIndex: "2" }}>
              <h1 style={{ textAlign: "center" }}>Login</h1>
            </Col>
            <Col span={12} style={{ zIndex: "2" }}>
              <h1 style={{ textAlign: "center" }}>Register</h1>
            </Col>
          </Row>
          {/* //? ============== Login Section ============= ?// */}
          {modal && (
            <Row gutter={[24]}>
              <Col
                lg={{ span: 12 }}
                md={{ span: 12 }}
                xs={{ span: 24 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "600px",
                  padding: "0px",
                }}
              >
                <Col
                  style={{
                    padding: "0px",
                  }}
                >
                  <section className={s.formSection}>
                    <Col span={24}>
                      <Form layout="vertical" form={form}>
                        <Form.Item name="email" label="Email">
                          <Input placeholder="Email Address" />
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                          <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Row justify="space-between">
                          <Col>
                            <Checkbox>Remember me</Checkbox>
                          </Col>
                          <Col style={{ alignSelf: "right" }}>
                            <Link href="/">
                              <a>
                                <p>Forgot password ?</p>
                              </a>
                            </Link>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </section>
                  <Col span={24}>
                    <ThemesButton
                      type={"default " + s.button}
                      onClick={handleLogin}
                      loading={loading}
                    >
                      LOG IN
                    </ThemesButton>
                  </Col>

                  <Divider plain>or Continue with</Divider>
                  <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Row gutter={[10, 0]} className={s.socialButtonSection}>
                      <Col span={12}>
                        <Button className={s.socialButton} onClick={handleGoogleLogin}>
                          <Row align="middle">
                            <span className={s.socialButtonIcon}>
                              <Image
                                src="/images/google-icon.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                                preview={false}
                              />
                            </span>
                            <p>Google</p>
                          </Row>
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button className={s.socialButton} onClick={handleFacebookLogin}>
                          <Row align="middle">
                            <span className={s.socialButtonIcon}>
                              <Image
                                src="/images/facebook-icon.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                                preview={false}
                              />
                            </span>
                            <p>Facebook</p>
                          </Row>
                        </Button>
                      </Col>
                    </Row>
                  </Col>

                  <Col className={s.link}>
                    {`Don't have account?`}
                    <Divider type="vertical" />
                    <a onClick={() => setModal(false)}>{`Register Here`}</a>
                  </Col>
                </Col>
              </Col>

              <Col
                lg={{ span: 12 }}
                md={{ span: 12 }}
                xs={{ span: 0 }}
                className={s.imageContainerLogin}
              />
            </Row>
          )}
          {/* // * ====================================== * // */}

          {/* //? ============== Register Section ============= ?// */}
          {!modal && (
            <Row gutter={[24]}>
              <Col
                lg={{ span: 12 }}
                md={{ span: 12 }}
                xs={{ span: 0 }}
                className={s.imageContainerRegister}
              />
              <Col
                lg={{ span: 12 }}
                md={{ span: 12 }}
                xs={{ span: 24 }}
                style={{ display: "flex", alignItems: "center", height: "600px" }}
              >
                <Col>
                  <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Row gutter={[10, 0]} className={s.socialButtonSection}>
                      <Col span={12}>
                        <Button className={s.socialButton} onClick={handleGoogleLogin}>
                          <Row align="middle">
                            <span className={s.socialButtonIcon}>
                              <Image
                                src="/images/google-icon.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                                preview={false}
                              />
                            </span>
                            <p>Google</p>
                          </Row>
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button className={s.socialButton} onClick={handleFacebookLogin}>
                          <Row align="middle">
                            <span className={s.socialButtonIcon}>
                              <Image
                                src="/images/facebook-icon.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                                preview={false}
                              />
                            </span>
                            <p>Facebook</p>
                          </Row>
                        </Button>
                      </Col>
                    </Row>
                  </Col>

                  <Divider plain>or</Divider>
                  <section className={s.formSection}>
                    <Col span={24}>
                      <Form layout="vertical" form={form}>
                        <Form.Item
                          name="email"
                          rules={[
                            { required: true, type: "email", message: "Please input your email!" },
                          ]}
                        >
                          <Input style={{ height: "50px" }} placeholder="Email Address" />
                        </Form.Item>
                        <Form.Item name="password" rules={[passwordFormRules]}>
                          <Input.Password style={{ height: "50px" }} placeholder="Password" />
                        </Form.Item>
                        <Form.Item
                          name="fullName"
                          rules={[
                            {
                              required: true,
                              type: "string",
                              message: "Please input your full name!",
                            },
                          ]}
                        >
                          <Input placeholder="Full Name" />
                        </Form.Item>
                        <Col span={24} style={{ padding: "0px" }}>
                          {/* <Divider plain>Your Role?</Divider> */}
                          <Form.Item
                            name="role"
                            rules={[{ required: true, message: "Please select your role!" }]}
                          >
                            <Radio.Group style={{ width: "100%" }}>
                              <Row gutter={[3, 0]}>
                                <Col lg={{ span: 8 }} md={{ span: 8 }} xs={{ span: 8 }}>
                                  <ThemesRadioWithImageModalLogin
                                    value="ARTIST"
                                    imgSrc="/images/frontpage-artist-icon.png"
                                  >
                                    Artist
                                  </ThemesRadioWithImageModalLogin>
                                </Col>
                                <Col lg={{ span: 8 }} md={{ span: 8 }} xs={{ span: 8 }}>
                                  <ThemesRadioWithImageModalLogin
                                    value="COLLECTOR"
                                    imgSrc="/images/frontpage-collector-icon.png"
                                  >
                                    Collector
                                  </ThemesRadioWithImageModalLogin>
                                </Col>
                                <Col lg={{ span: 8 }} md={{ span: 8 }} xs={{ span: 8 }}>
                                  <ThemesRadioWithImageModalLogin
                                    value="GALLERY"
                                    imgSrc="/images/frontpage-gallery-icon.png"
                                  >
                                    Gallery
                                  </ThemesRadioWithImageModalLogin>
                                </Col>
                              </Row>
                            </Radio.Group>
                          </Form.Item>
                        </Col>

                        <Row justify="space-between">
                          <Col>
                            <Checkbox style={{ fontSize: "12px" }}>
                              I Accept The Terms & Condition & Privacy Policy
                            </Checkbox>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </section>

                  <Col span={24}>
                    <ThemesButton
                      type={"default " + s.button}
                      onClick={handleRegister}
                      loading={addLoading || sendMailLoading}
                    >
                      SIGN UP
                    </ThemesButton>
                  </Col>
                  <Col className={s.link}>
                    {`Already have account?`}
                    <Divider type="vertical" />
                    <a onClick={() => setModal(true)}>{`Login Here`}</a>
                  </Col>
                </Col>
              </Col>
            </Row>
          )}
          {/* // * ====================================== * // */}
        </div>
      </ThemesModal>
    </>
  );
}

ThemesLoginModal.propTypes = {
  visible: propTypes.bool,
  onCancel: propTypes.func,
};

export default ThemesLoginModal;
