// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsAuctionDetails from "app/contents/auction/details";

// Dummy
import { auctionList } from "app/database/dummy/auction-list";

function PageDashboardExhibitionDetails(props) {
  const { auction } = props;

  return (
    <>
      <AppContentsAuctionDetails auctionData={auction} />
    </>
  );
}

export default PageDashboardExhibitionDetails;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const fetchedAuction = auctionList.find((item) => item.id === parseInt(id));

  if (!fetchedAuction) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      auction: fetchedAuction,
    },
  };
}
