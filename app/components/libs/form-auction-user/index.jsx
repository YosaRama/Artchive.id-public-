// Libs
import { Col, Form, Input, Modal } from "antd";
import { useSession } from "next-auth/react";
import propTypes from "prop-types";

function AppFormAuctionUser(props) {
  const { onSubmit, isEdit, initialData, visible, onCancel } = props;

  //? ============== Handle Session ============= ?//
  const { data: session } = useSession();
  // * ====================================== * //

  //? ============== Handle Cancel ============= ?//
  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  //? ============== Handle Submission ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        name: value.name,
        email: value.email,
        phoneNumber: value.phone_number,
        facebook: value.facebook,
        instagram: value.instagram,
        status: value.status,
        createdBy: +session?.user?.id,
        updatedBy: +session?.user?.id,
      };
      onSubmit(submission);
      handleCancel();
    });
  };
  // * ====================================== * //
  return (
    <>
      <Modal
        visible={visible}
        title={initialData ? "Edit User" : "Add User"}
        okText={initialData ? "Update" : "Add"}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Col>
          <Form layout="vertical" form={form} initialValues={initialData}>
            <Form.Item name={"name"} label="User Name">
              <Input placeholder="Input user name here" />
            </Form.Item>
            <Form.Item name={"email"} label="Email">
              <Input placeholder="Inputuser email here" />
            </Form.Item>
            <Form.Item name={"phone_number"} label="Phone Number">
              <Input placeholder="Input user name here" />
            </Form.Item>
            <Form.Item name={"facebook"} label="Facebook">
              <Input placeholder="Input your facebook here" />
            </Form.Item>
            <Form.Item name={"instagram"} label="Instagram">
              <Input placeholder="Input your instagram here" />
            </Form.Item>
            <Form.Item name={"status"} label="Status">
              <Input placeholder="User status" />
            </Form.Item>
          </Form>
        </Col>
      </Modal>
    </>
  );
}

AppFormAuctionUser.propTypes = {
  onSubmit: propTypes.func,
  isEdit: propTypes.bool,
  initialData: propTypes.any,
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default AppFormAuctionUser;
