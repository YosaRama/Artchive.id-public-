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
import AppContentsAuctionDetailsGallery from "./gallery";
import AppContentsAuctionDetailsUser from "./user";

function AppContentsAuctionDetails(props) {
  const auctionData = {};
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
                  ? "Curator on Auction"
                  : currentMenu == 4
                  ? "Gallery on Auction"
                  : currentMenu == 5
                  ? "Participant on Auction"
                  : ""
              }
            >
              {currentMenu == 1 && <AppContentsAuctionDetailsGeneral auctionData={auctionData} />}

              {currentMenu == 2 && (
                <AppContentsAuctionDetailsLots
                  lotsData={auctionData?.lots}
                  auctionTitle={auctionData?.title}
                  // onAddArtwork={onAddArtwork}
                  // onDeleteArtwork={onDeleteArtwork}
                />
              )}
              {currentMenu == 3 && ""}
              {currentMenu == 4 && (
                <AppContentsAuctionDetailsGallery
                  galleryData={auctionData?.overview.auction_img}
                  // onAddGallery={onAddGallery}
                  // onDeleteGallery={onDeleteGallery}
                />
              )}
              {currentMenu == 5 && <AppContentsAuctionDetailsUser userData={auctionData.users} />}
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
