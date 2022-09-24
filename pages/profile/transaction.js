// Libs
import { getSession, useSession } from "next-auth/react";

// Helper
import profileSession from "app/helpers/profileSession";

// Contents
import ThemesContentsProfileTransaction from "themes/contents/profile/studio/transaction";

function PageProfileTransaction() {
  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionLoading } = useSession();
  // * ====================================== * //
  return (
    <>
      <ThemesContentsProfileTransaction userId={session.user.id} />
    </>
  );
}

export default PageProfileTransaction;

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
