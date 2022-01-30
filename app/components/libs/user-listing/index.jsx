// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Button, Col, Empty, Pagination, Row } from "antd";

// Components
import ContainerCard from "app/components/container/containerCard";
import CardUserList from "app/components/libs/card-user-list";
import DashboardSearch from "app/components/libs/dashboard-search";
import AddButton from "../add-button";

// Icons
import { FilterOutlined } from "@ant-design/icons";

function UserListing(props) {
  const router = useRouter();
  const {
    searchValue,
    setSearchValue,
    data,
    onDelete,
    title,
    total,
    pageSize,
    currentPage,
    handlePagination,
  } = props;

  return (
    <ContainerCard
      title={title}
      extra={
        <>
          <Row gutter={[16, 0]}>
            {/* Filter Section */}
            <Col>
              <Button>
                <span>
                  <FilterOutlined /> Filter
                </span>
              </Button>
            </Col>
            {/* <Drawer visible={true}>Halo</Drawer> */}
            {/* ===================================== */}

            {/* Search Section */}
            <Col>
              <DashboardSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchBy="name"
              />
            </Col>
            {/* ===================================== */}
          </Row>
        </>
      }
    >
      <AddButton onCreate={() => router.push("/dashboard/users/create")}>Add User</AddButton>
      {data.length != 0 &&
        data?.map((item) => {
          return (
            <CardUserList
              key={item.id}
              email={item.email}
              id={item.id}
              date={item.created_at}
              image={item.profile && `${process.env.NEXT_PUBLIC_S3_URL}/${item.profile.url}`}
              name={item.full_name}
              role={item.role}
              onDelete={onDelete}
            />
          );
        })}
      {data.length == 0 && (
        <Col span={24}>
          <Empty />
        </Col>
      )}
      {total ? (
        <Col span={24} style={{ textAlign: "right" }}>
          <Pagination
            total={total}
            defaultPageSize={pageSize}
            current={currentPage}
            onChange={handlePagination}
          />
        </Col>
      ) : (
        ""
      )}
    </ContainerCard>
  );
}

UserListing.propTypes = {
  title: propTypes.string,
  searchValue: propTypes.string,
  setSearchValue: propTypes.func,
  data: propTypes.array,
  onDelete: propTypes.func,
  total: propTypes.number,
  handlePagination: propTypes.func,
  pageSize: propTypes.number,
  currentPage: propTypes.number,
};

export default UserListing;
