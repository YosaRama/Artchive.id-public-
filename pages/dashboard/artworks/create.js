// Libs
import { getSession } from "next-auth/react";

// Contents
import ArtworkCreate from "app/contents/artwork-create";

function ArtworkCreatePage() {
  return (
    <>
      <ArtworkCreate />
    </>
  );
}

export default ArtworkCreatePage;

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
