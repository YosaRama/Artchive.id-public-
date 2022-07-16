/* eslint-disable import/no-anonymous-default-export */
import ThemesAboutDescription from "../about-description";

export default {
  title: "Main/Components/About Description",
  component: ThemesAboutDescription,
};

const Template = (args) => <ThemesAboutDescription {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "First Benefit",
  description: "lorem ipsum dolor sit amet",
};
