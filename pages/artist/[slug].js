// Contents
import ThemesContentsArtistDetails from "themes/contents/artist/details";

// Query
import moment from "moment";
import { GET_ALL_ARTIST_SLUG, GET_USER_BY_SLUG } from "app/database/query/user";

function PageArtistDetails(props) {
  const { artistData } = props;
  return (
    <>
      <ThemesContentsArtistDetails artistData={artistData} />
    </>
  );
}

export default PageArtistDetails;

export const getStaticPaths = async () => {
  const artistSlug = await GET_ALL_ARTIST_SLUG();
  return {
    paths: artistSlug.map((item) => {
      return { params: { slug: item.slug } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug;
  const artistDataRes = await GET_USER_BY_SLUG({ slug: slug });
  const artistData = JSON.parse(JSON.stringify(artistDataRes));
  return {
    props: {
      artistData: artistData,
    },
    revalidate: 10,
  };
};
