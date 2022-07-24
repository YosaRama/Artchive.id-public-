/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppFormArtworkMaterial from "../form-artwork-material";

export default {
  title: "Dashboard/Components/Form Artwork Material",
  component: AppFormArtworkMaterial,
};

const Template = (args) => (
  <>
    <Col span={6}>
      <AppFormArtworkMaterial {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
