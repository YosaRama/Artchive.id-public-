// Libs
import { useState } from "react";
import { Button, Col, Row, Input, Drawer, Form } from "antd";
const { Search } = Input;

// Component
import ContainerCard from "app/components/container/containerCard";
import ContainerBox from "app/components/container/containerBox";
import CardUserList from "app/components/libs/card-user-list";

// Icons
import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import DashboardSearch from "app/components/libs/dashboard-search";

// Data Hook
import { useUsers } from "app/hooks/user";

function ArtistList() {
  //? ============== Data Fetching ============= ?//
  const { data } = useUsers({ queryString: `role=ARTIST` });
  const allArtist = data?.data;
  console.log(allArtist);
  // * ====================================== * //

  //? ============== Search Handling ============= ?//
  const [searchValue, setSearchValue] = useState();
  // * ====================================== * //

  return (
    <ContainerBox>
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
        <Col span={24} style={{ textAlign: "right", marginBottom: 20 }}>
          <Button type="primary">
            <span>
              <PlusOutlined />
            </span>
            Add artist
          </Button>
        </Col>
        {allArtist &&
          allArtist.map((item) => {
            return (
              <CardUserList
                key={item.id}
                email={item.email}
                id={item.id}
                date={item.created_at}
                image={`${process.env.NEXT_PUBLIC_S3_URL}/${item.profile.url}`}
                name={item.full_name}
                role={item.role}
              />
            );
          })}
      </ContainerCard>
    </ContainerBox>
  );
}

export default ArtistList;
