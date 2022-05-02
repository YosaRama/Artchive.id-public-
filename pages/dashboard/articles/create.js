// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsArticleCreate from "app/contents/articles/create";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardArticlesCreate() {
  return (
    <>
      <AppContentsArticleCreate />
    </>
  );
}

export default PageDashboardArticlesCreate;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  const res = dashboardSession({ session: session, data: session });
  // * ====================================== * //

  return {
    props: res.props,
    redirect: res.redirect,
  };
};
