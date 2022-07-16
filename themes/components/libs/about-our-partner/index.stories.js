/* eslint-disable import/no-anonymous-default-export */
import ThemesAboutOurPartner from "../about-our-partner";

export default {
  title: "Main/Components/About Our Partner",
  component: ThemesAboutOurPartner,
};

const Template = (args) => <ThemesAboutOurPartner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  logoPartner: "/images/artwork-1.jpg",
};
