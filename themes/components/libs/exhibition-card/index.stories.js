/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import ThemesExhibitionCard from ".";

export default {
  title: "Main/Components/Exhibition Card",
  component: ThemesExhibitionCard,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={8}>
      <ThemesExhibitionCard {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  thumbnail: "",
  title: "Exhibition Card",
  organizedBy: "Artchive.id",
  startDate: "22 July 2022",
  endDate: "22 Juli 2022",
  description: "lorem ipsum dolor sit amet",
  slug: "",
};
