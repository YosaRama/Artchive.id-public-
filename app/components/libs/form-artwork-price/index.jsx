// Libs
import propTypes from "prop-types";
import { Form, Input, InputNumber } from "antd";
import { useState } from "react";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Components
import AppCardFinalPrice from "../card-final-price";
import AppFormPrice from "../form-price";

function AppFormArtworkPrice(props) {
  const { markupPrice, setMarkupPrice } = props;

  //? ============== Handle Create Markup Price ============= ?//
  const handleCreateMarkupPrice = (value) => {
    setMarkupPrice(Math.round(value * 1.4));
  };
  // * ====================================== * //

  return (
    <>
      <AppFormPrice onChange={handleCreateMarkupPrice} />
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
