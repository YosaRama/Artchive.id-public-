// Libs
import { getSession, useSession } from "next-auth/react";

// Helper
import profileSession from "dashboard/helpers/profileSession";

// Contents
import ThemesContentsProfileStudioList from "themes/contents/profile/studio/list";

function PageProfileStudioList() {
  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionLoading } = useSession();
  // * ====================================== * //

  return (
    <>
      <ThemesContentsProfileStudioList artistId={session?.user?.id} />
    </>
  );
}

export default PageProfileStudioList;

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
