// Libs
import { useRouter } from "next/router";
import { Button, Col, Form, Input, PageHeader, Select } from "antd";
const { Option } = Select;

// Component
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";

// Data Hook
import { useUsers } from "app/hooks/user";

// Helper
import { passwordFormRules } from "app/helpers/passwordFormRules";

function CreateUser() {
  const router = useRouter();

  //? ============== Handle Create User ============= ?//

  const { onAdd } = useUsers({ queryString: "" });
  const [form] = Form.useForm();

  const handleAdd = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        email: value.email,
        fullName: value.fullName,
        password: value.password,
        role: value.role,
      };
      const result = await onAdd(submission);
      if (result) {
        router.push(`/dashboard/users/${value.role.toLowerCase()}`);
      }
    });
  };

  // * ====================================== * //

  return (
    <ContainerBox>
      <Col span={12} style={{ margin: "auto" }}>
        <PageHeader title="CREATE NEW USER" onBack={() => router.back()} />
        <ContainerCard>
          <Form layout="vertical" form={form}>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: "email", message: "Please input email!" }]}
              >
                <Input placeholder="Input your email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="password" label="Password" rules={[passwordFormRules]} hasFeedback>
                <Input.Password placeholder="Input your password" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: "Please input full name!" }]}
              >
                <Input placeholder="Input your full name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: "Please select role!" }]}
              >
                <Select placeholder="Select your role">
                  <Option value={"ARTIST"}>Artist</Option>
                  <Option value={"GALLERY"}>Gallery</Option>
                  <Option value={"COLLECTOR"}>Collector</Option>
                  <Option value={"ADMIN"}>Admin</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" onClick={handleAdd}>
                Submit
              </Button>
            </Col>
          </Form>
        </ContainerCard>
      </Col>
    </ContainerBox>
  );
}

export default CreateUser;
