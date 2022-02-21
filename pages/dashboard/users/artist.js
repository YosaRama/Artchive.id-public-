// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListArtist from "app/contents/user/list/artist";

function ArtistListPage() {
  return (
    <>
      <AppContentsUserListArtist />
    </>
  );
}

export default ArtistListPage;

export const getServerSideProps = async (ctx) => {
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
        destination: "/managepage",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
