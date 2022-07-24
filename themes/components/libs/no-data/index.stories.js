/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesNoData from ".";

export default {
  title: "Dashboard/Components/No Data",
  component: ThemesNoData,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesNoData {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  description: "No Data Description",
  children: "No Data Children",
};
