// Libs
import { useState } from "react";

// Components
import AppContentsAuctionDetailsLotsDetails from "./details";
import AppContentsAuctionDetailsLotsList from "./list";

function AppContentsAuctionDetailsLots() {
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
        <AppContentsAuctionDetailsLotsList onItemClick={handleLotItemClick} onState={handleState} />
      ) : (
        ""
      )}

      {stage === "details" ? (
        <AppContentsAuctionDetailsLotsDetails
          activeLotId={activeLotId}
          lotDetails={[]}
          onState={handleState}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default AppContentsAuctionDetailsLots;
