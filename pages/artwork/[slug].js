// Libs
import moment from "moment";

// Contents
import ArtworkDetailsPage from "themes/contents/artwork/artwork-details";

function PageArtworkDetails(props) {
  const { artworkData } = props;
  return (
    <>
      <ArtworkDetailsPage artworkData={artworkData} />
    </>
  );
}

export default PageArtworkDetails;

export const getStaticProps = async (ctx) => {
  const { GET_ARTWORK_BY_SLUG } = require("app/database/query/artwork");

  const artworkDataRes = await GET_ARTWORK_BY_SLUG({ slug: ctx.params.slug });
  const artworkData = {
    ...artworkDataRes,
    createdAt: moment(artworkDataRes?.createdAt).toISOString(),
    updatedAt: moment(artworkDataRes?.updatedAt).toISOString(),
  };
  return {
    props: {
      artworkData: artworkData,
    },
    revalidate: 10,
  };
};

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
