// Libs
import { Col, Row, Image, Form, Input } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import moment from "moment";

// Compoenent
import ThemesButton from "../../button";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Style
import s from "./index.module.scss";

function ThemesAuctionLoginForm(props) {
  const { onClick } = props;
  const { width } = useWindowSize();

  const router = useRouter();
  const { id: auctionId } = router.query;

  return (
    <Row className={s.modalContainer}>
      {width > 768 && (
        <Col span={11} className={s.image}>
          <Image src="/images/modal-login.png" alt="" preview={false} />
        </Col>
      )}

      {
        // #region Login Form
        <Col span={width > 768 ? 13 : 24} className={s.registerContainer}>
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
            <p
              className={s.closeBtn}
              onClick={() => {
                router.push("/auction");
              }}
            >
              No Thanks
            </p>
          </Col>
        </Col>
        // #endregion
      }
    </Row>
  );
}

propTypes.ThemesAuctionLoginForm = {
  onClick: propTypes.any,
  closeModal: propTypes.any,
};

export default ThemesAuctionLoginForm;
