/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from "antd";
import ThemesArticleListCard from ".";

export default {
  title: "Main/Components/Article List Card",
  component: ThemesArticleListCard,
};

const Template = (args) => (
  <div id="frontpage">
    <Row gutter={[16, 0]}>
      <Col span={8}>
        <ThemesArticleListCard {...args} />
      </Col>
    </Row>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Some Article",
  author: "John Doe",
  postDate: "02-02-2022",
  shortDescription: "lorem ipsum dolor sit amet",
  url: "https://artchive.id",
  thumbnailSrc: "",
};
