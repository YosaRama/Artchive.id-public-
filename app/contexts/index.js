// Context Library
import TemplateContextProvider from "./_template";
import AuctionPhoneContextProvider from "./auction-phone";

function GlobalContext(props) {
  return (
    <>
      <AuctionPhoneContextProvider>
        <TemplateContextProvider>{props.children}</TemplateContextProvider>
      </AuctionPhoneContextProvider>
    </>
  );
}

export default GlobalContext;
