// Libs
import { getSession, useSession } from "next-auth/react";

// Contents
import ThemesContentsProfileStudioCreate from "themes/contents/profile/studio/create";

// Helper
import profileSession from "dashboard/helpers/profileSession";

function PageProfileStudioCreate(props) {
  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionLoading } = useSession();
  // * ====================================== * //

  return (
    <>
      <ThemesContentsProfileStudioCreate artistData={session?.user} />
    </>
  );
}

export default PageProfileStudioCreate;

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
