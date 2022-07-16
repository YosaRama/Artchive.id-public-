/* eslint-disable import/no-anonymous-default-export */
import ThemesLinkWithArrow from "../link-with-arrow";

export default {
  title: "Main/Components/Link with Arrow",
  component: ThemesLinkWithArrow,
};

const Template = (args) => <ThemesLinkWithArrow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Read More",
  link: "https://artchive.id",
};
