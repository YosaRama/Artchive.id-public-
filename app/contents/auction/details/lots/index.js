// Libs
import propTypes from "prop-types";
import { useState } from "react";

// Components
import AppContentsAuctionDetailsLotsDetails from "./details";
import AppContentsAuctionDetailsLotsList from "./list";

function AppContentsAuctionDetailsLots(props) {
  const { lotsData } = props;

  //? ============== Handle state ============= ?//
  const [stage, setStage] = useState("list");
  const handleState = (selectedStage) => {
    setStage(selectedStage);
  };
  // * ====================================== * //

  const [activeLotId, setActiveLotId] = useState(null);

  const handleLotItemClick = (lotId) => {
    setActiveLotId(lotId);
  };

  return (
    <>
      {stage === "list" ? (
        <AppContentsAuctionDetailsLotsList
          lotsData={lotsData}
          onItemClick={handleLotItemClick}
          onState={handleState}
        />
      ) : (
        ""
      )}

      {stage === "details" ? (
        <AppContentsAuctionDetailsLotsDetails
          activeLotId={activeLotId}
          lotDetails={lotsData}
          onState={handleState}
        />
      ) : (
        ""
      )}
    </>
  );
}

AppContentsAuctionDetailsLots.propTypes = {
  onAddArtwork: propTypes.func,
  lotsData: propTypes.any,
  onDeleteArtwork: propTypes.func,
  auctionTitle: propTypes.any,
};

export default AppContentsAuctionDetailsLots;
