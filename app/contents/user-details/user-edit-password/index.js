// Libs
import propTypes from "prop-types";
import { Button, Col, Form, Input } from "antd";

// Components
import changeConfirmModal from "app/components/libs/change-modal-confirm";

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
          <Form.Item
            name="password"
            label="New Password"
            rules={[
              {
                required: true,
                validator: (_, value) => {
                  const validPassword = new RegExp("(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}");
                  if (validPassword.test(value)) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "Password must be at least 8 characters long and contain at least one capital letter and one number."
                    )
                  );
                },
              },
            ]}
            hasFeedback
          >
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
