// Contents
import ThemesContentsArtworkDetails from "themes/contents/artwork/details";

function PageArtworkDetails(props) {
  const { artworkData } = props;
  return (
    <>
      <ThemesContentsArtworkDetails artworkData={artworkData} />
    </>
  );
}

export default PageArtworkDetails;

export const getStaticPaths = async () => {
  const { GET_ALL_ARTWORK_SLUG } = require("app/database/query/artwork");
  const artworkSlug = await GET_ALL_ARTWORK_SLUG();

  return {
    paths: artworkSlug.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { GET_ARTWORK_BY_SLUG } = require("app/database/query/artwork");

  const artworkDataRes = await GET_ARTWORK_BY_SLUG({ slug: ctx.params.slug });

  //? ============== Artwork Data Parse ============= ?//
  const artworkDataParse = {
    ...artworkDataRes,
    link: `artwork/${artworkDataRes.slug}`,
  };
  // * ====================================== * //

  const artworkData = JSON.parse(JSON.stringify(artworkDataParse));
  return {
    props: {
      artworkData: artworkData,
    },
    revalidate: 10,
  };
};
