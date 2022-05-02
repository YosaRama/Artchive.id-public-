// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsArticlesDetails from "app/contents/articles/details";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardArticleEdit() {
  return (
    <>
      <AppContentsArticlesDetails />
    </>
  );
}

export default PageDashboardArticleEdit;

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
