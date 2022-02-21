// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsArtworkCreate from "app/contents/artwork/create";

function AppContentsArtworkCreatePage() {
  return (
    <>
      <AppContentsArtworkCreate />
    </>
  );
}

export default AppContentsArtworkCreatePage;

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
