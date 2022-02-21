// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserCreate from "app/contents/user/create";

function PageDashboardUsersCreate() {
  return (
    <>
      <AppContentsUserCreate />
    </>
  );
}

export default PageDashboardUsersCreate;

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
