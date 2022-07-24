/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import AppSearchBox from "../search-box";

export default {
  title: "Dashboard/Components/Search Box",
  component: AppSearchBox,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <AppSearchBox {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  searchValue: "",
  setSearchValue: "",
  searchBy: "GENRE",
};
