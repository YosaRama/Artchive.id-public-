// Libs
import { getSession } from "next-auth/react";

// Contents
import DashboardHome from "app/contents/home";

function Dashboard() {
  return <DashboardHome />;
}

export default Dashboard;

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
        destination: "/managepage",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
