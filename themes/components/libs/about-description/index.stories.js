/* eslint-disable import/no-anonymous-default-export */
import ThemesAboutDescription from "../about-description";

export default {
  title: "Main/Components/About Description",
  component: ThemesAboutDescription,
};

const Template = (args) => <ThemesAboutDescription {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Who Are We?",
  description:
    "Artchive.id is an online gallery platform that specializes in marketing, sales, and art galleries. Artchive.id was born in October 2021. The founding of Artchive.id was motivated by our concern for the growth of art in the middle of a pandemic that faced numerous challenges. In our company, we provide you as a collector, artist, or gallery. The gallery will publish artist’s artwork or promote their exhibition on this digital platform. Artchive.id team will tackle end-to-end on event organizer until promotion when gallery have exhibition",
};
