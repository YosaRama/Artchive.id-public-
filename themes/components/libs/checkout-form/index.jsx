// Libs
import propTypes from "prop-types";
import { Col, Form, Input, Row } from "antd";

// Components
import TextArea from "antd/lib/input/TextArea";

function ThemesCheckoutForm(props) {
  const { form } = props;
  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        form={form}
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
          name="phoneNumber"
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input placeholder="Input your phone number" />
        </Form.Item>

        <Form.Item
          label="Recipient Name"
          name="recipientName"
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
          name="zipCode"
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

        <Form.Item label="Notes (Optional)" name="notes" rules={[{ required: false }]}>
          <TextArea rows={4} placeholder="Input some notes for your purchase" />
        </Form.Item>
      </Form>
    </>
  );
}

ThemesCheckoutForm.propTypes = {
  form: propTypes.func,
};

export default ThemesCheckoutForm;
