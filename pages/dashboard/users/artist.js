// Libs
import { getSession } from "next-auth/react";

// Contents
import ArtistList from "app/contents/user-artist-list";

function ArtistListPage() {
  return (
    <>
      <ArtistList />
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
