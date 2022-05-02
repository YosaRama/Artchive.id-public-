// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsArticleList from "app/contents/articles/list";

// Helpers
import dashboardSession from "app/helpers/dashboardSession";

function PageDashboardArticlesList() {
  return (
    <>
      <AppContentsArticleList />
    </>
  );
}

export default PageDashboardArticlesList;

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
