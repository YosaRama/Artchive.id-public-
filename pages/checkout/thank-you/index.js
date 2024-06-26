// Libs
import { getSession, useSession } from "next-auth/react";

// Contents
import ThemesCheckoutThankYou from "themes/contents/checkout/thank-you";

// Helper
import profileSession from "dashboard/helpers/profileSession";

function PageCheckoutThankYou() {
  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionLoading } = useSession();
  // * ====================================== * //
  return <ThemesCheckoutThankYou userId={session.user.id} />;
}

export default PageCheckoutThankYou;

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
