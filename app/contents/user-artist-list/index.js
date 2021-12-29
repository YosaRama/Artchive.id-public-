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
        <CardUserList />
        <CardUserList />
        <CardUserList />
        <CardUserList />
      </ContainerCard>
    </ContainerBox>
  );
}

export default ArtistList;
