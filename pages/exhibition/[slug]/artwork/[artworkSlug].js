// Queries
import { GET_EXHIBITION_ARTWORK_DETAILS_BY_SLUG } from "app/database/query/artwork";
import { GET_ALL_ARTWORK_EXHIBITION_SLUG } from "app/database/query/exhibition";

// Contents
import ThemesContentsExhibitionArtwork from "themes/contents/exhibition/artwork";

function PageArtworkOnExhibitionDetails(props) {
  const { artworkDetails } = props;
  return (
    <>
      <ThemesContentsExhibitionArtwork artworkDetails={artworkDetails} />
    </>
  );
}

export default PageArtworkOnExhibitionDetails;

export const getStaticPaths = async () => {
  const allArtworkSlugRes = await GET_ALL_ARTWORK_EXHIBITION_SLUG();

  //? ============== Data Parse ============= ?//
  const allArtworkSlug = allArtworkSlugRes
    .map((item) => {
      return item.artworks.map((artworkItem) => {
        return {
          slug: item.slug,
          artworkSlug: artworkItem.artwork.slug,
        };
      });
    })
    .flat(1);
  // * ====================================== * //

  return {
    paths: allArtworkSlug.map((item) => {
      return {
        params: {
          slug: item.slug,
          artworkSlug: item.artworkSlug,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { slug, artworkSlug } = ctx.params;
  const artworkDetailsRes = await GET_EXHIBITION_ARTWORK_DETAILS_BY_SLUG({
    slug: artworkSlug,
    exhibitionSlug: slug,
  });

  //? ============== Artwork Details Data Parse ============= ?//
  const artworkDetailsParse = {
    ...artworkDetailsRes,
    markup_price: artworkDetailsRes.exhibitions[0].exhibition_price,
    link: `exhibition/${slug}/artwork/${artworkDetailsRes.slug}`,
    exhibition_id: artworkDetailsRes.exhibitions[0].exhibition_id,
  };
  // * ====================================== * //

  const artworkDetails = JSON.parse(JSON.stringify(artworkDetailsParse));

  return {
    props: {
      artworkDetails: artworkDetails,
    },
  };
};
