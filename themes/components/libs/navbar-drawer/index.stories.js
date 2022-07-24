/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesNavbarDrawer from ".";

export default {
  title: "Main/Components/Navbar Drawer",
  component: ThemesNavbarDrawer,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={8}>
      <ThemesNavbarDrawer {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  visible: "True",
  onClose: "onClose",
};
