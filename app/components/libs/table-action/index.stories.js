/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppTableAction from "../table-action";

export default {
  title: "Dashboard/Components/Table Action",
  component: AppTableAction,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppTableAction {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  id: "1",
  onEdit: "",
  onDelete: "",
};
