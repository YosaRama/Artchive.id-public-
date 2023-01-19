// Libs
import propTypes from "prop-types";
import { Form, Input, InputNumber } from "antd";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

function AppFormPrice(props) {
  const { onChange, initialValue } = props;
  return (
    <>
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true,
            message: "Please input price for this artwork!",
            validator: (_, value) => {
              if (new RegExp(/^[0-9,.]+$/).test(value)) {
                return Promise.resolve;
              }

              return Promise.reject(new Error("Please input correct price!"));
            },
          },
        ]}
      >
        <Input
          style={{ width: "100%" }}
          placeholder="Input artwork price"
          value={priceFormatter(`Rp ${initialValue}`, ",")}
          onChange={onChange}
          formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
          parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
          addonBefore="Rp"
        />
      </Form.Item>
    </>
  );
}

AppFormPrice.propTypes = {
  onChange: propTypes.func,
  initialValue: propTypes.any,
};

export default AppFormPrice;
