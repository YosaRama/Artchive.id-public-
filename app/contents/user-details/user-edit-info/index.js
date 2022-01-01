// Libs
import { Button, Col, Divider, Form, Input } from "antd";

function UserEditInfo() {
  return (
    <>
      <Form layout="vertical">
        <Col span={12}>
          <Divider orientation="left">Profile Information</Divider>
          <Form.Item label="Full Name" name="full_name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Full Name" name="full_name">
            <Input />
          </Form.Item>
          <Divider orientation="left">Address Information</Divider>
          <Form.Item label="City" name="city">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Divider orientation="left">Social Media</Divider>
          <Form.Item label="Instagram" name="instagram_url">
            <Input />
          </Form.Item>
          <Form.Item label="Facebook" name="facebook_url">
            <Input />
          </Form.Item>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" size="large">
            Save Changes
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default UserEditInfo;
