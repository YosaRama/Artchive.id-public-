// Libs
import { Col, Row, Image, Form, Input } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { useState } from "react";

// Compoenent
import ThemesButton from "../../button";

// Helper
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Style
import s from "./index.module.scss";
import { useAuctionPhoneCtx } from "dashboard/contexts/auction-phone";

function ThemesAuctionLoginForm(props) {
  const { handleModalVisible, handleModalStage, eventStatus } = props;
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { setPhoneNumber } = useAuctionPhoneCtx();

  const handleSubmit = () => {
    setLoading(true);
    form
      .validateFields()
      .then(async (val) => {
        setPhoneNumber(val.phone);
        if (eventStatus === "LIVE") {
          handleModalStage("verify");
        }

        if (eventStatus === "BEFORE") {
          handleModalStage("register");
        }
      })
      .catch(() => {});
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
              <h3>Participant Verification</h3>
            </Col>
            <Form
              form={form}
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Enter your Phone Number" />
              </Form.Item>

              <Form.Item>
                <ThemesButton
                  type={`primary + ${s.registerBtn} `}
                  onClick={handleSubmit}
                  loading={loading}
                >
                  LOGIN
                </ThemesButton>
              </Form.Item>
            </Form>
            <p className={s.closeBtn} onClick={handleModalVisible}>
              Back to Auction List
            </p>
          </Col>
        </Col>
        // #endregion
      }

      {/* // * ====================================== * // */}
    </Row>
  );
}

ThemesAuctionLoginForm.propTypes = {
  handleModalVisible: propTypes.func,
  handleModalStage: propTypes.func,
  eventStatus: propTypes.oneOf(["BEFORE", "LIVE", "AFTER"]),
  closeModal: propTypes.any,
};

export default ThemesAuctionLoginForm;
