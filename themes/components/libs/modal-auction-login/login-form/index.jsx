// Libs
import { Col, Row, Image, Form, Input } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";

// Compoenent
import ThemesButton from "../../button";

// Style
import s from "./index.module.scss";

function ThemesAuctionLoginForm(props) {
  const { onClick } = props;
  const router = useRouter();
  return (
    <Row className={s.modalContainer}>
      <Col span={11} className={s.image}>
        <Image src="/images/modal-login.png" alt="" preview={false} />
      </Col>
      {/* //? ============== login Form ============= ?// */}
      <Col span={13} className={s.registerContainer}>
        <Col className={s.register}>
          <Col className={s.title}>
            <h3>Confirm your Phone Number</h3>
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
              label="Phone Number"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item>
              <ThemesButton type={`primary + ${s.registerBtn} `} onClick={onClick}>
                LOGIN
              </ThemesButton>
            </Form.Item>
          </Form>
          <p className={s.closeBtn} onClick={() => router.push("/auction")}>
            No Thanks
          </p>
        </Col>
      </Col>
      {/* // * ====================================== * // */}
    </Row>
  );
}

propTypes.ThemesAuctionLoginForm = {
  onClick: propTypes.any,
};

export default ThemesAuctionLoginForm;
