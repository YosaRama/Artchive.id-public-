/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesBanner from "./";

export default {
  title: "Main/Components/Banner",
  component: ThemesBanner,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesBanner {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  imgSrc: "/public/images/artwork-1.jpg",
  children: "Banner",
  className: "Banner",
};
