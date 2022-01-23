// Libs
import Link from "next/link";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import SimplePageContainer from "themes/components/container/simple-page-container";
import PageButton from "themes/components/libs/page-button";

function SignInPage() {
  return (
    <PageContainerBox>
      <SimplePageContainer imgSrc="/images/artwork-1.jpg">
        <section style={{ textAlign: "center" }}>
          <Col span={24}>
            <h1>Sign In</h1>
          </Col>

          <Col span={24}>
            <Button>Login By Google</Button>
          </Col>
          <Col span={24}>
            <Button>Login By Facebook</Button>
          </Col>

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

          <Col>
            <PageButton>LOG IN</PageButton>
          </Col>
          <Col>
            <PageButton type="outlined">CREATE ACCOUNT</PageButton>
          </Col>
        </section>
      </SimplePageContainer>
    </PageContainerBox>
  );
}

export default SignInPage;
