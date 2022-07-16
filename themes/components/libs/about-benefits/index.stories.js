/* eslint-disable import/no-anonymous-default-export */
import ThemesAboutBenefits from "../about-benefits";

export default {
  title: "Main/Components/About Benefit",
  component: ThemesAboutBenefits,
};

const Template = (args) => <ThemesAboutBenefits {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "First Benefit",
  description: "lorem ipsum dolor sit amet",
  imageSrc: "http://artchive.id/images/benefit-1.png",
};
