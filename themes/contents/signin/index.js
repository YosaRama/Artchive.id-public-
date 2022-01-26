// Libs
import Image from "next/image";
import Link from "next/link";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import SimplePageContainer from "themes/components/container/simple-page-container";
import PageButton from "themes/components/libs/page-button";

// Styles
import s from "./index.module.scss";

function SignInPage() {
  return (
    <PageContainerBox>
      <SimplePageContainer imgSrc="/images/signin-background.jpg" cardClassName="halo">
        <section style={{ textAlign: "center" }} className={s.section}>
          <Col span={24} className={s.title}>
            <h1>Sign In</h1>
          </Col>

          <section className={s.socialButtonSection}>
            <Col span={24}>
              <Button className={s.socialButton}>
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
              <Form layout="vertical">
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
            <PageButton type={"default " + s.button}>LOG IN</PageButton>
          </Col>
          <Col span={24}>
            <PageButton type={"outlined " + s.button}>CREATE ACCOUNT</PageButton>
          </Col>
        </section>
      </SimplePageContainer>
    </PageContainerBox>
  );
}

export default SignInPage;
