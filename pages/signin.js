// Libs
import { getSession } from "next-auth/react";

// Contents
import SignInPage from "themes/contents/signin";

function PageSignIn() {
  return <SignInPage />;
}

export default PageSignIn;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  } else {
    return {
      props: {
        data: null,
      },
    };
  }
};
