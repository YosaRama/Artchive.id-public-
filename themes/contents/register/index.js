// Libs
import Image from "next/image";
import { Button, Checkbox, Col, Form, Input, Radio, Row } from "antd";
import { useRouter } from "next/router";

// Components
import PageContainerBox from "themes/components/container/box-container";
import SimplePageContainer from "themes/components/container/simple-page-container";
import PageButton from "themes/components/libs/page-button";
import RadioCard from "themes/components/libs/page-radio-card";

// Helper
import { passwordFormRules } from "app/helpers/passwordFormRules";

// Styles
import s from "./index.module.scss";

function RegisterPage() {
  const router = useRouter();

  //? ============== Handle Register ============= ?//
  const [form] = Form.useForm();
  const handleRegister = () => {
    form.validateFields().then((value) => {
      console.log(value);
    });
  };
  // * ====================================== * //

  return (
    <PageContainerBox>
      <SimplePageContainer imgSrc="/images/register-background.jpg" cardClassName="halo">
        <section style={{ textAlign: "center" }} className={s.section}>
          <Col span={24} className={s.title}>
            <h1>{"Get's Started"}</h1>
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
              <Form layout="vertical" form={form}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, type: "email", message: "Please input your email!" }]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item name="password" rules={[passwordFormRules]}>
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                  name="full_name"
                  rules={[
                    { required: true, type: "string", message: "Please input your full name!" },
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Col span={24} style={{ margin: "50px 0 0" }}>
                  <h1 style={{ fontSize: 24, marginBottom: 20 }}>Who Are You ?</h1>
                  <Form.Item name="role">
                    <Radio.Group style={{ width: "100%" }}>
                      <Row gutter={[16, 0]}>
                        <Col span={8}>
                          <RadioCard value="ARTIST" imgSrc="/images/frontpage-artist-icon.png">
                            Artist
                          </RadioCard>
                        </Col>
                        <Col span={8}>
                          <RadioCard
                            value="COLLECTOR"
                            imgSrc="/images/frontpage-collector-icon.png"
                          >
                            Collector
                          </RadioCard>
                        </Col>
                        <Col span={8}>
                          <RadioCard value="GALLERY" imgSrc="/images/frontpage-gallery-icon.png">
                            Gallery
                          </RadioCard>
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
            <PageButton type={"default " + s.button} onClick={handleRegister}>
              SIGN UP
            </PageButton>
          </Col>
          <Col span={24}>
            <PageButton type={"outlined " + s.button} onClick={() => router.push("/signin")}>
              LOG IN
            </PageButton>
          </Col>
        </section>
      </SimplePageContainer>
    </PageContainerBox>
  );
}

export default RegisterPage;
