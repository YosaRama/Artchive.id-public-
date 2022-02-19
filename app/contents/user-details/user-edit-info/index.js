// Libs
import propTypes from "prop-types";
import { Button, Col, Divider, Form, Input } from "antd";

function UserEditInfo(props) {
  const { initialData, onSave, loading } = props;

  //? ============== Handle Update ============= ?//
  const [form] = Form.useForm();
  const handleUpdate = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        fullName: value.full_name,
        email: value.email,
        city: value.city,
        address: value.address,
        instagramUrl: value.instagram_url,
        facebookUrl: value.facebook_url,
        biography: value.biography,
      };

      const result = onSave(submission);
    });
  };
  // * ====================================== * //

  return (
    <>
      {initialData && (
        <Form layout="vertical" initialValues={initialData} form={form}>
          <Col span={12}>
            <Divider orientation="left">Profile Information</Divider>
            <Form.Item label="Full Name" name="full_name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Bio" name="biography">
              <Input.TextArea autoSize={{ maxRows: 5, minRows: 3 }} />
            </Form.Item>
            <Divider orientation="left">Address Information</Divider>
            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
            <Divider orientation="left">Social Media</Divider>
            <Form.Item
              label="Instagram"
              name="instagram_url"
              rules={[{ type: "url", message: "Please input correct instagram profile URL!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Facebook"
              name="facebook_url"
              rules={[{ type: "url", message: "Please input correct facebook profile URL!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" size="large" onClick={handleUpdate} loading={loading}>
              Save Changes
            </Button>
          </Col>
        </Form>
      )}
    </>
  );
}

UserEditInfo.propTypes = {
  initialData: propTypes.object.isRequired,
  onSave: propTypes.func,
  loading: propTypes.bool,
};

export default UserEditInfo;
