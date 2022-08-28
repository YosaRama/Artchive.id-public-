// Libs
import { Col, Form, Input, Button, Row } from "antd";

// Styles
import s from "antd";
import ThemesButton from "../button";
import TextArea from "antd/lib/input/TextArea";

function ThemesCheckoutForm() {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        form={form}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Input your email" />
        </Form.Item>

        <Row gutter={[20, 0]}>
          <Col span={12}>
            <Form.Item
              labelCol={{ span: 8 }}
              // wrapperCol={{ span: 22 }}
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please input your first name!" }]}
            >
              <Input placeholder="Input your first name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              labelCol={{ span: 8 }}
              // wrapperCol={{ span: 22 }}
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please input your last name!" }]}
            >
              <Input placeholder="Input your last name" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Phone Number"
          name="phonenumber"
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input placeholder="Input your phone number" />
        </Form.Item>

        <Form.Item
          label="Recipent Name"
          name="recipentname"
          rules={[{ required: true, message: "Please input your recipent name!" }]}
        >
          <Input placeholder="Input your recipent name" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input placeholder="Input your first address" />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input your city!" }]}
        >
          <Input placeholder="Input your city" />
        </Form.Item>

        <Form.Item
          label="Zip Code"
          name="zipcode"
          rules={[{ required: true, message: "Please input your zip code!" }]}
        >
          <Input placeholder="Input your zip code" />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please input your country!" }]}
        >
          <Input placeholder="Input your country" />
        </Form.Item>

        <Form.Item label="Notes (Optional)" name="notes">
          <TextArea rows={4} placeholder="Input some notes for your purchase" />
        </Form.Item>
      </Form>
    </>
  );
}

export default ThemesCheckoutForm;
