// Libs
import { Col, Row, Image, Form, Input } from "antd";
import propTypes from "prop-types";
import { useRouter } from "next/router";

// Compoenent
import ThemesButton from "../../button";

// Style
import s from "./index.module.scss";

function ThemesAuctionRegisterForm(props) {
  const { onClick } = props;
  const router = useRouter();

  return (
    <Row className={s.modalContainer}>
      <Col span={11} className={s.image}>
        <Image src="/images/modal-register.png" alt="" preview={false} />
      </Col>
      {/* //? ============== Register Form ============= ?// */}
      <Col span={13} className={s.registerContainer}>
        <Col className={s.register}>
          <Col className={s.title}>
            <h3>REGISTER</h3>
          </Col>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>

            <Form.Item>
              <ThemesButton type={`primary + ${s.registerBtn} `} onClick={onClick}>
                REGISTER
              </ThemesButton>
            </Form.Item>
            <Form.Item>
              <p>Already have auction account?</p>
              <ThemesButton type={`primary + ${s.registerBtn} `} onClick={onClick}>
                SIGN UP
              </ThemesButton>
            </Form.Item>
            <Form.Item>
              <p className={s.closeBtn} onClick={() => router.push("/auction")}>
                No Thanks
              </p>{" "}
            </Form.Item>
          </Form>
        </Col>
      </Col>
      {/* // * ====================================== * // */}
    </Row>
  );
}

propTypes.ThemesAuctionRegisterForm = {
  onClick: propTypes.any,
};

export default ThemesAuctionRegisterForm;
