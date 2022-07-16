/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from "antd";
import ThemesArticleCard from "../article-card";

export default {
  title: "Main/Components/Article Card",
  component: ThemesArticleCard,
};

const Template = (args) => (
  <div id="frontpage">
    <Row gutter={[16, 0]}>
      <Col span={8}>
        <ThemesArticleCard {...args} />
      </Col>
    </Row>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Some Article",
  shortDescription: "lorem ipsum dolor sit amet",
  postedDate: "02-02-2022",
  url: "https://artchive.id",
  imageSrc: "",
};
