// Libs
import { getSession } from "next-auth/react";

// Contents
import ProfilePage from "themes/contents/profile";

function PageProfile() {
  return (
    <>
      <ProfilePage />
    </>
  );
}

export default PageProfile;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  if (session) {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
