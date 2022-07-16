/* eslint-disable import/no-anonymous-default-export */
import AppAddButton from "../add-button";

export default {
  title: "Dashboard/Components/Add Button",
  component: AppAddButton,
};

const Template = (args) => <AppAddButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Add Something",
};
