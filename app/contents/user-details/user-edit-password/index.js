// Libs
import { Button, Col, Form, Input } from "antd";

function UserEditPassword() {
  return (
    <>
      <Form layout="vertical">
        <Col span={12}>
          <Form.Item name="password" label="New Password">
            <Input />
          </Form.Item>
          <Form.Item name="confirm_password" label="Confirmation Password">
            <Input />
          </Form.Item>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" size="large">
            Change Password
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default UserEditPassword;
