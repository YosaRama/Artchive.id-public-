// Libs
import { getSession, useSession } from "next-auth/react";

// Contents
import ThemesContentsProfile from "themes/contents/profile";

// Helper
import profileSession from "dashboard/helpers/profileSession";

function PageProfile() {
  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionLoading } = useSession();
  // * ====================================== * //

  return (
    <>
      <ThemesContentsProfile userId={session.user.id} />
    </>
  );
}

export default PageProfile;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  const res = profileSession({ session: session, data: {} });
  // * ====================================== * //

  return {
    props: { session: session },
    redirect: res?.redirect,
  };
};
