// Libs
import propTypes from "prop-types";
import { Col, Row } from "antd";

// Components
import ThemesModal from "../modal-container";

function ThemesLoginModal(props) {
  const { visible, onCancel } = props;

  return (
    <>
      <ThemesModal
        centered={true}
        footer={null}
        closable={true}
        visible={visible}
        onCancel={onCancel}
        width={"65%"}
      >
        <div style={{ height: 750 }}>
          <Row justify="center">
            <Col span={12}>
              <h1 style={{ textAlign: "center" }}>Login</h1>
            </Col>
            <Col span={12}>
              <h1 style={{ textAlign: "center" }}>Signup</h1>
            </Col>
          </Row>
        </div>
      </ThemesModal>
    </>
  );
}

ThemesLoginModal.propTypes = {
  visible: propTypes.bool,
  onCancel: propTypes.func,
};

export default ThemesLoginModal;
