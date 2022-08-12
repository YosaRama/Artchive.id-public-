// Libs
import { Button, Col, Form, Input, Radio, Row, Divider, Checkbox } from "antd";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerTwoColumns from "themes/components/container/two-column";
import ThemesButton from "themes/components/libs/button";
import ThemesRadioWithImage from "themes/components/libs/radio-with-image";
import { ErrorNotification, WarningNotification } from "app/components/utils/notification";

// Helper
import { passwordFormRules } from "app/helpers/passwordFormRules";
import { stringCapitalize } from "app/helpers/capitalize";
import { hashPassword } from "app/helpers/auth";

// Data Hook
import { useUsers } from "app/hooks/user";
import { useMailer } from "app/hooks/mailer";

// Styles
import s from "./index.module.scss";

function ThemesLoginModal() {
  const router = useRouter();

  // //? ============== Handle Register ============= ?//
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

  const [form] = Form.useForm();

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

  //? ============== Handle Credentials Login ============= ?//
  const [loading, setLoading] = useState(false);

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

  const [isLogin, setIsLogin] = useState(false);
  const haveAccount = () => {
    setIsLogin(true);
  };
  const noAccount = () => {
    setIsLogin(false);
  };

  return (
    <ThemesContainerTwoColumns imgSrc="/images/register-background.jpg" cardClassName="halo">
      {/*  //? ============== LOGIN MODAL SECTION ============= ?// */}
      {!isLogin && (
        <section style={{ textAlign: "center" }} className={s.section}>
          <Col span={24} className={s.title}>
            <h1>{"REGISTER"}</h1>
          </Col>

          <Divider orientation="center">Fill you personal information </Divider>
          <section className={s.formSection}>
            <Col span={24}>
              <Form layout="vertical" form={form}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, type: "email", message: "Please input your email!" }]}
                >
                  <Input placeholder="Email Address" className={s.inputSection} />
                </Form.Item>
                <Form.Item name="password" rules={[passwordFormRules]}>
                  <Input.Password placeholder="Password" className={s.inputSection} />
                </Form.Item>
                <Form.Item
                  name="fullName"
                  rules={[
                    { required: true, type: "string", message: "Please input your full name!" },
                  ]}
                >
                  <Input placeholder="Full Name" className={s.inputSection} />
                </Form.Item>

                <Divider orientation="center">{`What's your role?`}</Divider>
                <Col span={24}>
                  <Form.Item
                    name="role"
                    rules={[{ required: true, message: "Please select your role!" }]}
                  >
                    <Radio.Group>
                      <Row gutter={[10, 0]}>
                        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                          <ThemesRadioWithImage
                            value="ARTIST"
                            imgSrc="/images/frontpage-artist-icon.png"
                          >
                            Artist
                          </ThemesRadioWithImage>
                        </Col>
                        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                          <ThemesRadioWithImage
                            value="COLLECTOR"
                            imgSrc="/images/frontpage-collector-icon.png"
                          >
                            Collector
                          </ThemesRadioWithImage>
                        </Col>
                        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                          <ThemesRadioWithImage
                            value="GALLERY"
                            imgSrc="/images/frontpage-gallery-icon.png"
                          >
                            Gallery
                          </ThemesRadioWithImage>
                        </Col>
                      </Row>
                    </Radio.Group>
                  </Form.Item>
                </Col>

                {/* <Row justify="space-between">
                      <Col>
                        <Checkbox>I Accept The Terms & Condition & Privacy Policy</Checkbox>
                      </Col>
                    </Row> */}
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
          <Divider orientation="center">Continue with following methods.</Divider>
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <Button className={s.socialButton} onClick={handleGoogleLogin}>
                <Row align="middle">
                  <span className={s.socialButtonIcon}>
                    <Image src="/images/google-icon.png" alt="" layout="fill" objectFit="contain" />
                  </span>
                  <p>Google</p>
                </Row>
              </Button>
            </Col>
            <Col span={12}>
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
                  <p>Facebook</p>
                </Row>
              </Button>
            </Col>
          </Row>

          <Col span={24}>
            {`Already have account?`}
            <Divider type="vertical" orientation="center" />
            <a onClick={haveAccount}>Login</a>
            {/* <ThemesButton type={"outlined " + s.button} onClick={() => router.push("/signin")}>
            LOG IN
          </ThemesButton> */}
          </Col>
        </section>
      )}
      {/*  //? ============== REGISTER MODAL SECTION ============= ?// */}
      {isLogin && (
        <section style={{ textAlign: "center" }} className={s.section}>
          <Col span={24} className={s.title}>
            <h1>Sign In</h1>
          </Col>

          <Divider />
          <section className={s.formSection}>
            <Col span={24}>
              <Form layout="vertical" form={form}>
                <Form.Item name="email" label="Email">
                  <Input placeholder="Email Address" className={s.inputSection} />
                </Form.Item>
                <Form.Item name="password" label="Password">
                  <Input.Password placeholder="Password" className={s.inputSection} />
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
            <ThemesButton type={"default " + s.button} onClick={handleLogin} loading={loading}>
              LOG IN
            </ThemesButton>
          </Col>
          <Divider orientation="center">Continue with following methods.</Divider>
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <Button className={s.socialButton} onClick={handleGoogleLogin}>
                <Row align="middle">
                  <span className={s.socialButtonIcon}>
                    <Image src="/images/google-icon.png" alt="" layout="fill" objectFit="contain" />
                  </span>
                  <p>Google</p>
                </Row>
              </Button>
            </Col>
            <Col span={12}>
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
                  <p>Facebook</p>
                </Row>
              </Button>
            </Col>
          </Row>

          <Col span={24}>
            {`Don't have Arthive.id account?`}
            <Divider type="vertical" orientation="center" />
            <a onClick={noAccount}>Create Account.</a>
          </Col>
        </section>
      )}
      {/*  // * ====================================== * // */}
    </ThemesContainerTwoColumns>
  );
}

export default ThemesLoginModal;
