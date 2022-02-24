// Contents
import ThemesContentsArtistDetails from "themes/contents/artist/details";

// Query
import { GET_ALL_ARTIST_SLUG } from "app/database/query/user";

function PageArtistDetails() {
  return (
    <>
      <ThemesContentsArtistDetails />
    </>
  );
}

export default PageArtistDetails;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export const getStaticPaths = async () => {
  const artistSlug = await GET_ALL_ARTIST_SLUG();
  return {
    paths: artistSlug.map((item) => {
      return { params: { slug: item.slug } };
    }),
    fallback: false,
  };
};
