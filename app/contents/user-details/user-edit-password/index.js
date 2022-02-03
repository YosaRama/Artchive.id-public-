// Libs
import propTypes from "prop-types";
import { Button, Col, Form, Input } from "antd";

// Components
import changeConfirmModal from "app/components/libs/change-modal-confirm";

// Helper
import { passwordFormRules } from "app/helpers/passwordFormRules";

function UserEditPassword(props) {
  const { onSave } = props;

  //? ============== Handle Change Password ============= ?//
  const [form] = Form.useForm();
  const handleChangePassword = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        password: value.password,
      };
      const result = await onSave(submission);
    });
  };

  // * ====================================== * //

  return (
    <>
      <Form layout="vertical" form={form}>
        <Col span={12}>
          <Form.Item name="password" label="New Password" rules={[passwordFormRules]} hasFeedback>
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            label="Confirmation Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please re-type new password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("The two passwords that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            size="large"
            onClick={() =>
              changeConfirmModal({ title: "password", onConfirm: handleChangePassword })
            }
          >
            Change Password
          </Button>
        </Col>
      </Form>
    </>
  );
}

UserEditPassword.propTypes = {
  onSave: propTypes.func,
};

export default UserEditPassword;
