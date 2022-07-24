/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesMobileNavbar from ".";

export default {
  title: "Main/Components/Mobile Navbar",
  component: ThemesMobileNavbar,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={12}>
      <ThemesMobileNavbar {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
// Primary.args = {
//   title: "Some Article",
//   shortDescription: "lorem ipsum dolor sit amet",
//   postedDate: "02-02-2022",
//   url: "https://artchive.id",
//   imageSrc: "",
// };
