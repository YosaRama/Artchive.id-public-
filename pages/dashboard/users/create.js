// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsUserCreate from "app/contents/user/create";

function UserCreatePage() {
  return (
    <>
      <AppContentsUserCreate />
    </>
  );
}

export default UserCreatePage;

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
