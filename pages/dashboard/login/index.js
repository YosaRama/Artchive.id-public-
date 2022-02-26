// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsLogin from "app/contents/login";

function PageManagePage() {
  return <AppContentsLogin />;
}

export default PageManagePage;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  // * ====================================== * //

  if (session) {
    if (session.user.role == "ADMIN") {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: true,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: true,
        },
      };
    }
  } else {
    return {
      props: {
        data: null,
      },
    };
  }
};
