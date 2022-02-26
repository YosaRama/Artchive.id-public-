// Libs
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerTwoColumns from "themes/components/container/two-column";
import ThemesButton from "themes/components/libs/button";
import { ErrorNotification, WarningNotification } from "app/components/utils/notification";

// Hooks
import { useMailer } from "app/hooks/mailer";

// Helpers
import { hashPassword } from "app/helpers/auth";

// Styles
import s from "./index.module.scss";

function ThemesContentsSignIn() {
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Handle Google Login ============= ?//
  const handleGoogleLogin = async () => {
    const login = await signIn("google", { callbackUrl: "/register/role-selection" });
  };
  // * ====================================== * //

  //? ============== Handle Credentials Login ============= ?//
  const [loading, setLoading] = useState(false);
  const { onSendMail } = useMailer({ pathName: "/register/confirmation" });

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

  return (
    <ThemesContainerMain>
      <ThemesContainerTwoColumns imgSrc="/images/signin-background.jpg" cardClassName="halo">
        <section style={{ textAlign: "center" }} className={s.section}>
          <Col span={24} className={s.title}>
            <h1>Sign In</h1>
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
              <Button className={s.socialButton}>
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
            <ThemesButton type={"default " + s.button} onClick={handleLogin} loading={loading}>
              LOG IN
            </ThemesButton>
          </Col>
          <Col span={24}>
            <ThemesButton type={"outlined " + s.button} onClick={() => router.push("/register")}>
              CREATE ACCOUNT
            </ThemesButton>
          </Col>
        </section>
      </ThemesContainerTwoColumns>
    </ThemesContainerMain>
  );
}

export default ThemesContentsSignIn;
