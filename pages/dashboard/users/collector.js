// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserListCollector from "app/contents/user/list/collector";

function PageDashboardUsersCollectorList() {
  return (
    <>
      <AppContentsUserListCollector />
    </>
  );
}

export default PageDashboardUsersCollectorList;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  if (session && session.user.role == "ADMIN") {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
