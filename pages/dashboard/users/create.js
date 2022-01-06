// Libs
import { getSession } from "next-auth/react";

// Contents
import CreateUser from "app/contents/user-create";

function UserCreatePage() {
  return (
    <>
      <CreateUser />
    </>
  );
}

export default UserCreatePage;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession({ req: ctx.req });
  if (session) {
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
