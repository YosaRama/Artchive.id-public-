/* eslint-disable import/no-anonymous-default-export */
import ThemesAboutTeamCard from "../about-team-card";

export default {
  title: "Main/Components/About Team Card",
  component: ThemesAboutTeamCard,
};

const Template = (args) => (
  <div id="frontpage">
    <ThemesAboutTeamCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  imageTeam: "/images/artwork-1.jpg",
  name: "John Doe",
  position: "Director of Product",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  socialMedia1: "/images/about-linkedn.png",
  socialMedia2: "/images/about-mail.png",
};
