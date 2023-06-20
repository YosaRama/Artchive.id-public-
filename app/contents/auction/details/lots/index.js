// Libs
import { useState } from "react";

// Components
import AppContentsAuctionDetailsLotsDetails from "./details";
import AppContentsAuctionDetailsLotsList from "./list";

function AppContentsAuctionDetailsLots() {
  //#region Handle stage
  const [stage, setStage] = useState("list");
  const handleState = (selectedStage) => {
    setStage(selectedStage);
  };
  //#endregion

  //#region Active lots
  const [activeLotId, setActiveLotId] = useState(null);
  const handleLotItemClick = (lotId) => {
    setActiveLotId(lotId);
  };
  //#endregion

  return (
    <>
      {stage === "list" ? (
        <AppContentsAuctionDetailsLotsList onItemClick={handleLotItemClick} onState={handleState} />
      ) : (
        ""
      )}

      {stage === "details" ? (
        <AppContentsAuctionDetailsLotsDetails activeLotId={activeLotId} onState={handleState} />
      ) : (
        ""
      )}
    </>
  );
}

export default AppContentsAuctionDetailsLots;
