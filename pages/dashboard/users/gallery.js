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
