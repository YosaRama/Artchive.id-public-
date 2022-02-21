// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserDetails from "app/contents/user/details";

function PageDashboardUsersDetails() {
  return (
    <>
      <AppContentsUserDetails />
    </>
  );
}

export default PageDashboardUsersDetails;

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
