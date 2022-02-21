// Libs
import { Col, Form, Input } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import SimplePageContainer from "themes/components/container/simple-page-container";
import ThemesButton from "themes/components/libs/button";

// Styles
import s from "./index.module.scss";

function ContactUsPage() {
  return (
    <PageContainerBox>
      <SimplePageContainer imgSrc="/images/contact-background.jpg" cardClassName="halo">
        <section style={{ textAlign: "center" }} className={s.section}>
          <Col span={24} className={s.title}>
            <h1>Contact Us</h1>
          </Col>

          <section className={s.formSection}>
            <Col span={24}>
              <Form layout="vertical">
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
            <ThemesButton type={"default " + s.button}>SEND</ThemesButton>
          </Col>
        </section>
      </SimplePageContainer>
    </PageContainerBox>
  );
}

export default ContactUsPage;
