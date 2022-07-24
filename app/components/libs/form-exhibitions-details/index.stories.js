/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppFormExhibitionDetails from "../form-exhibitions-details";

export default {
  title: "Dashboard/Components/Form Exhibition Details",
  component: AppFormExhibitionDetails,
};

const Template = (args) => (
  <>
    <Col span={6}>
      <AppFormExhibitionDetails {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: "",
  isEdit: true,
  initialData: "123",
};
