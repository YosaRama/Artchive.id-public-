// Libs
import moment from "moment";

// Dummy
import { auctionList } from "app/database/dummy/auction-list";

// Contents
import ThemesContentsAuctionDetailsLots from "themes/contents/auction/lots";

function PageAuctionDetailsLots(props) {
  const { auction } = props;
  return (
    <>
      <ThemesContentsAuctionDetailsLots auctionData={auction} />
    </>
  );
}

export default PageAuctionDetailsLots;

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
