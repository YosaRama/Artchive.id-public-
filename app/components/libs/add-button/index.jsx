// Libs
import propTypes from "prop-types";
import { Col, Button } from "antd";

// Icons
import { PlusOutlined } from "@ant-design/icons";

function AddButton(props) {
  const { children, onCreate } = props;
  return (
    <Col span={24} style={{ textAlign: "right", marginBottom: 20 }}>
      <Button type="primary" onClick={onCreate}>
        <span style={{ marginRight: 5 }}>
          <PlusOutlined />
        </span>
        {children}
      </Button>
    </Col>
  );
}

AddButton.propTypes = {
  children: propTypes.node,
  onCreate: propTypes.func,
};

export default AddButton;
