// Libs
import { Col, Form, Input, Modal, Select } from "antd";
import { useAuctionUser } from "app/hooks/auction/user";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { useEffect } from "react";

function AppFormAuctionUser(props) {
  const { Option } = Select;
  const { onSubmit, userId, visible, onCancel } = props;
  const router = useRouter();
  const { id } = router.query;

  const { data: userDetails } = useAuctionUser({ singleId: userId, auctionId: id });

  //? ============== Handle Submission ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const dataPayload = {
        email: value.email,
        facebook: value.facebook,
        instagram: value.instagram,
        name: value.name,
        phone_number: value.phone_number,
        status: value.status,
        status_description: value.status_description,
      };
      onSubmit(dataPayload);
      handleCancel();
    });
  };
  // * ====================================== * //

  useEffect(() => {
    if (userId) {
      form.setFieldsValue(userDetails);
    }
  }, [form, userDetails, userId]);

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <>
      <Modal
        visible={visible}
        title={userId ? "Edit User" : "Add User"}
        okText={userId ? "Update" : "Add"}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Col>
          <Form layout="vertical" form={form} initialValues={userId ? userDetails : {}}>
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
              <Select placeholder="Select your status">
                <Option key={"APPROVE"}>Approve</Option>
                <Option key={"DECLINE"}>Decline</Option>
              </Select>
            </Form.Item>
            <Form.Item name={"status_description"} label="Notes">
              <Input.TextArea placeholder="Status Description/Notes" />
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
  userId: propTypes.string,
  auctionId: propTypes.string,
};

export default AppFormAuctionUser;
