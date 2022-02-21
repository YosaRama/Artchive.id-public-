// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsHome from "app/contents/home";

function PageDashboard() {
  return <AppContentsHome />;
}

export default PageDashboard;

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
