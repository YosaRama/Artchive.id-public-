// Contents
import AppContentsGenreCreate from "app/contents/genre/create";

function AppContentsGenreCreatePage() {
  return (
    <>
      <AppContentsGenreCreate />
    </>
  );
}

export default AppContentsGenreCreatePage;

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
