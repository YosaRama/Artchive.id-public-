/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from "antd";
import ThemesShareSocial from "../share-social";

export default {
  title: "Main/Components/Share Social",
  component: ThemesShareSocial,
};

const Template = (args) => (
  <div id="frontpage">
    <Col span={24}>
      <ThemesShareSocial {...args} />
    </Col>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  mail: true,
  facebook: true,
  instagram: true,
  whatsapp: true,
  subject: "Subject",
  url: "https://artchive.id",
  message: "Message",
  className: "shareSocial",
};
