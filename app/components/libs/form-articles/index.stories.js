/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppFormArticles from "../form-articles";

export default {
  title: "Dashboard/Components/Form Articles",
  component: AppFormArticles,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppFormArticles {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: "",
  isEdit: true,
  initialData: "",
};
