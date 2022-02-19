// Libs
import { getSession } from "next-auth/react";

// Contents
import CollectorList from "app/contents/user-collector-list";

function CollectorListPage() {
  return (
    <>
      <CollectorList />
    </>
  );
}

export default CollectorListPage;

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
