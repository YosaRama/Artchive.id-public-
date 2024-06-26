// Libs
import propTypes from "prop-types";
import { Form, Input, InputNumber } from "antd";
import { useState } from "react";

// Helper
import priceFormatter from "dashboard/helpers/priceFormatter";
import markupPriceGenerator from "dashboard/helpers/markupPriceGenerator";

// Components
import AppCardFinalPrice from "../card-final-price";
import AppFormPrice from "../form-price";

function AppFormArtworkPrice(props) {
  const { markupPrice, setMarkupPrice } = props;

  //? ============== Handle Price ============= ?//
  const [inputPrice, setInputPrice] = useState("");
  // * ====================================== * //

  //? ============== Handle Create Markup Price ============= ?//
  const handleCreateMarkupPrice = (e) => {
    const valueParse = e.target.value;
    const parseValue = valueParse.replace(/\D/g, "").replace(/Rp\s?|(,*)/g, "");
    setInputPrice(priceFormatter(`${parseValue}`, ","));
    setMarkupPrice(Math.round(+parseValue * 1.4));
    // const finalPrice = markupPriceGenerator(parseValue); //TODO: Used when ready for markup price generator
  };
  // * ====================================== * //

  return (
    <>
      <AppFormPrice onChange={handleCreateMarkupPrice} initialValue={inputPrice} />
      <AppCardFinalPrice markupPrice={markupPrice} />
      <Form.Item name={"markupPrice"} hidden>
        <Input value={`${markupPrice}`} />
      </Form.Item>
    </>
  );
}

AppFormArtworkPrice.propTypes = {
  markupPrice: propTypes.any.isRequired,
  setMarkupPrice: propTypes.func.isRequired,
};

export default AppFormArtworkPrice;
