// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListGallery from "app/contents/user/list/gallery";

function AppContentsUserListGalleryPage() {
  return (
    <>
      <AppContentsUserListGallery />
    </>
  );
}

export default AppContentsUserListGalleryPage;

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
