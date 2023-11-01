// Libs
import { getSession } from "next-auth/react";

// Contents
import ThemesContainerAuction from "themes/components/container/auction";
import ThemesContentsAuctionArtwork from "themes/contents/auction/artwork";

// Helper
import auctionSession from "app/helpers/auctionSession";

function PageArtworkOnAuctionDetails() {
  return (
    <>
      <ThemesContainerAuction>
        <ThemesContentsAuctionArtwork />
      </ThemesContainerAuction>
    </>
  );
}

export default PageArtworkOnAuctionDetails;

// export const getServerSideProps = async (ctx) => {
//   const { query } = ctx;
//   //? ============== Handle Session ============= ?//
//   const session = await getSession(ctx);
//   const res = auctionSession({ session: session, data: session, id: query.id });
//   // * ====================================== * //
//   return {
//     props: res.props,
//     redirect: res.redirect,
//   };
// };
