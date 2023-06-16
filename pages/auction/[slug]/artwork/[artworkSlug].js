// Libs
import { useRouter } from "next/router";

// Contents
import ThemesContentsAuctionArtwork from "themes/contents/auction/artwork";

// Dummy
import { auctionList } from "app/database/dummy/auction-list";

function PageArtworkOnAuctionDetails(props) {
  const { lots } = props;

  return (
    <>
      <ThemesContentsAuctionArtwork lotDataList={lots} />
    </>
  );
}

export default PageArtworkOnAuctionDetails;

export async function getStaticPaths() {
  const paths = auctionList.flatMap((item) =>
    item.lots.map((lot) => ({
      params: { slug: item.slug, artworkSlug: lot.slug },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug, artworkSlug } = params;

  // Find the object with the matching slug
  const selectedItem = auctionList.find((item) => item.slug === slug);

  // Find the lots object with the matching lotsSlug
  const lots = selectedItem.lots.find((lot) => lot.slug === artworkSlug);

  return {
    props: {
      lots: lots,
    },
  };
}
