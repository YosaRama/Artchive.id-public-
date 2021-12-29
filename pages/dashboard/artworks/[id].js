// Libs
import moment from "moment";

// Data
import { GET_ARTWORK_BY_ID } from "app/database/query/artwork";

// Contents
import ArtworkDetails from "app/contents/artwork-details";

function ArtworkDetailsPage(props) {
  return (
    <>
      <ArtworkDetails initialValue={props.artwork} />
    </>
  );
}

export default ArtworkDetailsPage;

export const getServerSideProps = async (ctx) => {
  const artworkId = ctx.query.id;
  const artworkData = await GET_ARTWORK_BY_ID({ id: artworkId });
  const artwork = {
    ...artworkData,
    artistId: [artworkData.artist.full_name, artworkData.artist_id],
    createdAt: moment(artworkData.createdAt).format("DD/MM/YYYY"),
    updatedAt: moment(artworkData.updatedAt).format("DD/MM/YYYY"),
  };

  return {
    props: {
      artwork: artwork,
    },
  };
};
