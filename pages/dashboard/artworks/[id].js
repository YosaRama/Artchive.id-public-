// Libs
import moment from "moment";
import { getSession } from "next-auth/react";

// Data
import { GET_ARTWORK_BY_ID } from "dashboard/database/query/artwork";

// Contents
import AppContentsArtworkDetails from "dashboard/contents/artwork/details";

// Helpers
import dashboardSession from "dashboard/helpers/dashboardSession";

function PageDashboardArtworksDetails(props) {
  return (
    <>
      <AppContentsArtworkDetails initialValue={props.artwork} />
    </>
  );
}

export default PageDashboardArtworksDetails;

export const getServerSideProps = async (ctx) => {
  const artworkId = ctx.query.id;
  const artworkData = await GET_ARTWORK_BY_ID({ id: artworkId });
  const artwork = artworkData && {
    ...artworkData,
    artistId: [artworkData?.artist.full_name, artworkData?.artist_id],
    createdAt: moment(artworkData?.createdAt).format("DD/MM/YYYY"),
    updatedAt: moment(artworkData?.updatedAt).format("DD/MM/YYYY"),
  };

  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  const res = dashboardSession({ session: session, data: { session: session, artwork: artwork } });
  // * ====================================== * //

  return {
    props: res.props,
    redirect: res.redirect,
  };
};
