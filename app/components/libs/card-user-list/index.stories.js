/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppCardUserList from "../card-user-list";

export default {
  title: "Dashboard/Components/Card User List",
  component: AppCardUserList,
};

const Template = (args) => (
  <Col span={24}>
    <AppCardUserList {...args} />
  </Col>
);

export const Primary = Template.bind({});
Primary.args = {
  image: "",
  name: "Someone Name",
  email: "Name@gmail.com",
  role: "ARTIST",
  date: "22 July 2022",
  id: 1,
  onDelete: "",
  status: "",
};
