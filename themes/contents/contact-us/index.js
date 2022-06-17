// Libs
import { Col, Form, Input } from "antd";
import { useState } from "react";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerTwoColumns from "themes/components/container/two-column";
import ThemesButton from "themes/components/libs/button";
import Link from "next/link";

// Hook
import { useMailer } from "app/hooks/mailer";

// Styles
import s from "./index.module.scss";

// Icons
import { MailFilled, MailOutlined } from "@ant-design/icons";

function ThemesContentsContactUs() {
  const [form] = Form.useForm();

  //? ============== Mailer Hook ============= ?//
  const { onSendMail, loading } = useMailer({ pathName: "/contact" });
  // * ====================================== * //

  //? ============== Handle Thanks ============= ?//
  const [thankyouSection, setThankyouSection] = useState(false);
  // * ====================================== * //

  //? ============== Handle Submit ============= ?//
  const handleSubmit = () => {
    form.validateFields().then((value) => {
      const submit = {
        name: value.name,
        email: value.email,
        message: value.message,
      };
      onSendMail(submit);
      setThankyouSection(true);
    });
  };
  // * ====================================== * //

  return (
    <>
      {!thankyouSection && (
        <ThemesContainerMain>
          <ThemesContainerTwoColumns imgSrc="/images/contact-background.jpg" cardClassName="halo">
            <section style={{ textAlign: "center" }} className={s.section}>
              <Col span={24} className={s.title}>
                <h1>Contact Us</h1>
              </Col>

              <>
                <section className={s.formSection}>
                  <Col span={24}>
                    <Form layout="vertical" form={form}>
                      <Form.Item name="name">
                        <Input placeholder="Name" />
                      </Form.Item>
                      <Form.Item name="email">
                        <Input placeholder="Email Address" />
                      </Form.Item>
                      <Form.Item name="message">
                        <Input.TextArea rows={12} placeholder="Message" />
                      </Form.Item>
                    </Form>
                  </Col>
                </section>
                <Col span={24}>
                  <ThemesButton
                    type={"default " + s.button}
                    onClick={handleSubmit}
                    loading={loading}
                  >
                    SEND
                  </ThemesButton>
                </Col>
              </>
            </section>
          </ThemesContainerTwoColumns>
        </ThemesContainerMain>
      )}

      {thankyouSection && (
        <section className={s.thankyouSection}>
          <Col span={24} className={s.thankyouContainer}>
            <Col span={24}>
              <MailOutlined className={s.mailIcon} />
            </Col>
            <Col xl={{ span: 8 }} lg={{ span: 12 }} xs={{ span: 22 }}>
              <h1>Thank You for Contacting Us!</h1>
              <p>Your message has been sent successfully! We will get back to you very soon.</p>
              <Link href={"/"}>
                <a>
                  <ThemesButton>BACK TO HOMEPAGE</ThemesButton>
                </a>
              </Link>
            </Col>
          </Col>
        </section>
      )}
    </>
  );
}

export default ThemesContentsContactUs;
