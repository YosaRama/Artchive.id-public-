// Libs
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Button, Card, Col, Form, Input } from "antd";
import Image from "next/image";
import { useState } from "react";

// Icon
import { CollectorIcon } from "public/icons/collector-icon";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// Notification
import { ErrorNotification } from "app/components/utils/notification";

function AppContentsLogin() {
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Handle Login ============= ?//
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
        router.push("/dashboard");
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
