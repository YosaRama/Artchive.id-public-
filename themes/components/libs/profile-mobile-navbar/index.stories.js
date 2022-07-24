/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesProfileMobileNavbar from ".";

export default {
  title: "Main/Components/Profile Mobile Navbar",
  component: ThemesProfileMobileNavbar,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={6}>
      <ThemesProfileMobileNavbar {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
a;
