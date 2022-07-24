/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesMapsGoogleLocation from ".";

export default {
  title: "Main/Components/Maps Google Location",
  component: ThemesMapsGoogleLocation,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={12}>
      <ThemesMapsGoogleLocation {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  lat: "-8.650000",
  lng: "115.216667",
};
