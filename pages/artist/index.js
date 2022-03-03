// Libs
import moment from "moment";

// Contents
import ThemesContentsArtistList from "themes/contents/artist/list";

// Queries
import { GET_USER } from "app/database/query/user";

function PageArtistList(props) {
  const { artistData } = props;
  return (
    <>
      <ThemesContentsArtistList initialArtistData={artistData} />
    </>
  );
}

export default PageArtistList;

export const getStaticProps = async (ctx) => {
  const artistDataRes = await GET_USER({ role: "ARTIST", client: "true", limit: 8 });
  const artistData = JSON.parse(JSON.stringify(artistDataRes));

  return {
    props: {
      artistData: artistData,
    },
  };
};
