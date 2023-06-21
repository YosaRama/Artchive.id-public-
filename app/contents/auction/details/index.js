// Libs
import { useRouter } from "next/router";
import { Col, PageHeader, Row } from "antd";
import { useState } from "react";
import propTypes from "prop-types";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";

// Contents
import AppContentsAuctionDetailsNavbar from "./navbar";
import AppContentsAuctionDetailsGeneral from "./general";
import AppContentsAuctionDetailsLots from "./lots";
import AppContentsAuctionDetailsUser from "./user";

function AppContentsAuctionDetails(props) {
  const router = useRouter();

  //? ============== Handle Menu ============= ?//
  const [currentMenu, setCurrentMenu] = useState(1);
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <PageHeader title="Auction Details" onBack={() => router.back()} />
        <Row gutter={16}>
          <Col span={6}>
            <AppContainerCard>
              <AppContentsAuctionDetailsNavbar
                currentMenu={currentMenu}
                setCurrentMenu={setCurrentMenu}
              />
            </AppContainerCard>
          </Col>
          <Col span={18}>
            <AppContainerCard
              title={
                currentMenu == 1
                  ? "Auction General Information"
                  : currentMenu == 2
                  ? "Lots on Auction"
                  : currentMenu == 3
                  ? "Participant on Auction"
                  : ""
              }
            >
              {currentMenu == 1 && <AppContentsAuctionDetailsGeneral />}

              {currentMenu == 2 && <AppContentsAuctionDetailsLots />}

              {currentMenu == 3 && <AppContentsAuctionDetailsUser />}
            </AppContainerCard>
          </Col>
        </Row>
      </AppContainerBox>
    </>
  );
}

AppContentsAuctionDetails.propTypes = {
  auctionData: propTypes.any.isRequired,
};

export default AppContentsAuctionDetails;
