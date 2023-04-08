// Libs
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Button, Card, Col, Form, Input } from "antd";
import Image from "next/image";
import { useState } from "react";

// Components
import { ErrorNotification, WarningNotification } from "app/components/utils/notification";

// Hooks
import { useMailer } from "app/hooks/mailer";

// Helpers
import { hashPassword } from "app/helpers/auth";

// Icon
import { CollectorIcon } from "public/icons/collector-icon";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function AppContentsLogin() {
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Handle Login ============= ?//
  const [loading, setLoading] = useState(false);
  const { onSendMail } = useMailer({ pathName: "/register/confirmation" });

  const handleLogin = () => {
    form.validateFields().then(async (value) => {
      setLoading(true);
      const login = await signIn("credentials", {
        redirect: false,
        email: value.email,
        password: value.password,
        type: "mail",
      });
      if (!login.error) {
        router.push("/dashboard");
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
    <>
      <section id="managepage">
        <div className="managepage-container">
          {/* Content Section */}
          <div className="managepage-content-container">
            <Card style={{ width: "25%", background: "rgba(255,255,255, 0.4)" }}>
              {/* Icon Section */}
              <Col span={24} className="d-flex center">
                <div className="managepage-content-icon">
                  <CollectorIcon />
                </div>
              </Col>
              {/* ========================== */}

              {/* Form Section */}
              <Col className="d-flex center" span={24}>
                <Form style={{ width: "100%" }} form={form} onFinish={handleLogin}>
                  <Form.Item name="email">
                    <Input
                      size="large"
                      placeholder="Input your email"
                      addonBefore={<UserOutlined />}
                    />
                  </Form.Item>
                  <Form.Item name="password">
                    <Input.Password
                      size="large"
                      placeholder="Input your password"
                      addonBefore={<LockOutlined />}
                    />
                  </Form.Item>
                  <Col span={24} className="d-flex center">
                    <Button
                      type="primary"
                      className="managepage-button"
                      size="large"
                      htmlType="submit"
                      loading={loading}
                    >
                      Login
                    </Button>
                  </Col>
                </Form>
              </Col>

              {/* ========================== */}
            </Card>
          </div>

          {/* ========================== */}

          {/* Background Image */}
          <div className="managepage-background-image">
            <Image layout="fill" alt="" objectFit="cover" src="/images/artwork-6.jpg" priority />
          </div>
          {/* ========================== */}
        </div>
      </section>
    </>
  );
}

export default AppContentsLogin;
