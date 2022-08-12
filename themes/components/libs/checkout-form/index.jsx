// Libs
import { Col, Form, Input, Button, Row } from "antd";

// Styles
import s from "antd";
import ThemesButton from "../button";

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

        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input placeholder="Input your full name" />
        </Form.Item>

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
        <Row gutter={[20, 0]}>
          <Col span={12}>
            <Form.Item
              labelCol={{ span: 8 }}
              // wrapperCol={{ span: 22 }}
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input your address!" }]}
            >
              <Input placeholder="Input your first address" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              labelCol={{ span: 8 }}
              // wrapperCol={{ span: 22 }}
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input your address!" }]}
            >
              <Input placeholder="Input your second address" />
            </Form.Item>
          </Col>
        </Row>

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

        <Form.Item label="Notes" name="notes">
          <Input placeholder="Input some notes for your purchase" />
        </Form.Item>

        {/* <Form.Item wrapperCol={{ offset: 20 }}>
          <ThemesButton type={"default "} htmlType="submit">
            SUBMIT
          </ThemesButton>
        </Form.Item> */}
      </Form>
    </>
  );
}

export default ThemesCheckoutForm;
