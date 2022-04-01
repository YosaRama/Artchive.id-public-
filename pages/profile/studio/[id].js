// Libs
import { getSession, useSession } from "next-auth/react";

// Contents
import ThemesContentsProfileStudioDetails from "themes/contents/profile/studio/details";

// Helper
import profileSession from "app/helpers/profileSession";

function PageProfileStudioDetails() {
  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionLoading } = useSession();
  // * ====================================== * //

  return (
    <>
      <ThemesContentsProfileStudioDetails artistData={session?.user} />
    </>
  );
}

export default PageProfileStudioDetails;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  const res = profileSession({ session: session, data: {} });
  // * ====================================== * //

  return {
    props: { session: await getSession(ctx) },
    redirect: res?.redirect,
  };
};
