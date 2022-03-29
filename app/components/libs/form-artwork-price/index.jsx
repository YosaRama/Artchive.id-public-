// Libs
import propTypes from "prop-types";
import { Form, Input, InputNumber } from "antd";
import { useState } from "react";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Components
import AppCardFinalPrice from "../card-final-price";

function AppFormArtworkPrice(props) {
  const { markupPrice, setMarkupPrice } = props;
  //? ============== Handle Create Markup Price ============= ?//
  //   const [markupPrice, setMarkupPrice] = useState(0);
  const handleCreateMarkupPrice = (value) => {
    setMarkupPrice(Math.round(value * 1.4));
  };
  // * ====================================== * //

  return (
    <>
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
          addonBefore="Rp"
          formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
          parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
          onChange={handleCreateMarkupPrice}
        />
      </Form.Item>
      <AppCardFinalPrice markupPrice={markupPrice} />
      <Form.Item name={"markupPrice"} hidden>
        <Input value={markupPrice} />
      </Form.Item>
    </>
  );
}

AppFormArtworkPrice.propTypes = {
  markupPrice: propTypes.any.isRequired,
  setMarkupPrice: propTypes.func.isRequired,
};

export default AppFormArtworkPrice;
