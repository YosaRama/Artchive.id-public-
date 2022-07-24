/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesProfileNavbar from ".";

export default {
  title: "Main/Components/Profile Navbar",
  component: ThemesProfileNavbar,
};

const Template = (args) => (
  <div id="frontpage">
    <ThemesProfileNavbar {...args} />
  </div>
);

export const Primary = Template.bind({});
