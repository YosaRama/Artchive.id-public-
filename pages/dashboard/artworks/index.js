// Libs
import { getSession } from "next-auth/react";

// Contents
import ArtworkList from "app/contents/artwork-list";

function ArtworkListPage() {
  return (
    <>
      <ArtworkList />
    </>
  );
}

export default ArtworkListPage;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession({ req: ctx.req });
  if (session) {
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
