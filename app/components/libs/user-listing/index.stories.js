/* eslint-disable import/no-anonymous-default-export */
import { Col } from "antd";
import UserListing from "../user-listing";

export default {
  title: "Dashboard/Components/User Listing",
  component: UserListing,
};

const Template = (args) => (
  <>
    <Col span={24}>
      <UserListing {...args} />
    </Col>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "User Listing Title",
  searchValue: "Search Value",
  setSearchValue: "",
  data: "",
  onDelete: "",
  total: "1",
  handlePagination: "",
  pageSize: "100",
  currentPage: "1",
};
