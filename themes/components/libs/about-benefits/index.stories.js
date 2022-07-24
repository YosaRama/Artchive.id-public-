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
  description:
    "There are many famous artists that join with Artchive.id! You can find your luxury artwork here!",
  imageSrc: "/images/benefit-2.png",
};
