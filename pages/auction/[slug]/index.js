// Libs
import moment from "moment";

// Queries

// Dummy
import { auctionList } from "app/database/dummy/auction-list";

// Contents
import ThemesContentsAuctionDetailsOverview from "themes/contents/auction/overview";

function PageAuctionDetailsOverview(props) {
  const { auction } = props;
  return (
    <>
      <ThemesContentsAuctionDetailsOverview auctionData={auction} />
    </>
  );
}

export default PageAuctionDetailsOverview;

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
