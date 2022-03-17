// Libs
import { getSession } from "next-auth/react";

// Contents
import ThemesContentsProfile from "themes/contents/profile";

function PageProfile() {
  return (
    <>
      <ThemesContentsProfile />
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
        destination: "/signin",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
