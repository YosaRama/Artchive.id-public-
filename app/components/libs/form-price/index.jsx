// Libs
import propTypes from "prop-types";
import { Form, InputNumber } from "antd";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

function AppFormPrice(props) {
  const { onChange } = props;
  return (
    <Form.Item
      name="price"
      label="Price"
      rules={[
        {
          required: true,
          message: "Please input price for this artwork!",
        },
      ]}
    >
      <InputNumber
        style={{ width: "100%" }}
        placeholder="Input artwork price"
        formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
        parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
        onChange={onChange}
      />
    </Form.Item>
  );
}

AppFormPrice.propTypes = {
  onChange: propTypes.func,
};

export default AppFormPrice;
