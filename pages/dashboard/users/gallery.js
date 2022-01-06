// Libs
import { getSession } from "next-auth/react";

// Contents
import GalleryList from "app/contents/user-gallery-list";

function GalleryListPage() {
  return (
    <>
      <GalleryList />
    </>
  );
}

export default GalleryListPage;

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
