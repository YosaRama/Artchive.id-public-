/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppRoleTag from "../role-tag";

export default {
  title: "Dashboard/Components/Role Tag",
  component: AppRoleTag,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppRoleTag {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  role: "ARTIST",
};
