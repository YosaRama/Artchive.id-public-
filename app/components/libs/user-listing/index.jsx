// Libs
import { useRouter } from "next/router";
import { Button, Col, Row } from "antd";
import propTypes from "prop-types";

// Component
import ContainerCard from "app/components/container/containerCard";
import CardUserList from "app/components/libs/card-user-list";
import DashboardSearch from "app/components/libs/dashboard-search";
import AddButton from "../add-button";

// Icons
import { FilterOutlined } from "@ant-design/icons";

function UserListing(props) {
  const router = useRouter();
  const { searchValue, setSearchValue, data } = props;

  return (
    <ContainerCard
      title="Artist List"
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
      {data &&
        data.map((item) => {
          return (
            <CardUserList
              key={item.id}
              email={item.email}
              id={item.id}
              date={item.created_at}
              image={item.profile && `${process.env.NEXT_PUBLIC_S3_URL}/${item.profile.url}`}
              name={item.full_name}
              role={item.role}
            />
          );
        })}
    </ContainerCard>
  );
}

UserListing.propTypes = {
  searchValue: propTypes.string,
  setSearchValue: propTypes.func,
  data: propTypes.array,
};

export default UserListing;
