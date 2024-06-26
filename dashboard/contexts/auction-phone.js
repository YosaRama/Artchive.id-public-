// Libs
import { createContext, useState, useContext } from "react";

//? ============== Initial Context Value ============= ?//
const AuctionPhoneContext = createContext({
  phoneNumber: "",
  setPhoneNumber: function () {},
});
// * ====================================== * //

//? ============== Initial Context Providers ============= ?//
export function AuctionPhoneContextProvider(props) {
  // Set Condition Value
  const [phoneNumber, setPhoneNumber] = useState("");
  // ==========================

  // Value Context Assignment
  const context = {
    phoneNumber: phoneNumber,
    setPhoneNumber: setPhoneNumber,
  };
  // ==========================

  return (
    <AuctionPhoneContext.Provider value={context}>{props.children}</AuctionPhoneContext.Provider>
  );
}

//? ============== Context Provider export  ============= ?//

export default AuctionPhoneContextProvider;

// * ====================================== * //

//? ============== Context Hook Preparation ============= ?//

export const useAuctionPhoneCtx = () => useContext(AuctionPhoneContext);

// * ====================================== * //
