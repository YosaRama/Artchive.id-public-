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
  const artistData = artistDataRes.map((item) => {
    return {
      ...item,
      birth_date: moment(item.birth_date).format(),
      createdAt: moment(item.createdAt).format(),
      updatedAt: moment(item.updatedAt).format(),
      profile: item.profile && {
        ...item.profile,
        createdAt: moment(item.profile.createdAt).format(),
        updatedAt: moment(item.profile.updatedAt).format(),
      },
    };
  });

  return {
    props: {
      artistData: artistData,
    },
  };
};
