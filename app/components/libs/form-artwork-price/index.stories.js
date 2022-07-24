/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppFormArtworkPrice from "../form-artwork-price";

export default {
  title: "Dashboard/Components/Form Artwork Price",
  component: AppFormArtworkPrice,
};

const Template = (args) => (
  <>
    <Col span={12}>
      <AppFormArtworkPrice {...args} />
      <Col>asdasd</Col>
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  markupPrice: "",
  setMarkupPrice: "",
};
