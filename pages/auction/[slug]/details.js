// Libs
import moment from "moment";

// Dummy
import { auctionList } from "app/database/dummy/auction-list";

// Contents
import ThemesContentsAuctionDetails from "themes/contents/auction/details";

function PageAuctionDetails(props) {
  const { auction } = props;
  return (
    <>
      <ThemesContentsAuctionDetails auctionData={auction} />
    </>
  );
}

export default PageAuctionDetails;

export async function getStaticPaths() {
  const paths = auctionList.map((auction) => ({
    params: { slug: auction.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Find the auction data based on the slug
  const auction = auctionList.find((auction) => auction.slug === slug);

  return { props: { auction } };
}
