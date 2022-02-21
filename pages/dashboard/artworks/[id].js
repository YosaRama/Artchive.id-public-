// Libs
import moment from "moment";
import { getSession } from "next-auth/react";

// Data
import { GET_ARTWORK_BY_ID } from "app/database/query/artwork";

// Contents
import AppContentsArtworkDetails from "app/contents/artwork/details";

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
  if (session && session.user.role == "ADMIN") {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
