// Contents
import AppContentsGenreDetails from "app/contents/genre/details";

function AppContentsGenreDetailsPage() {
  return (
    <>
      <AppContentsGenreDetails />
    </>
  );
}

export default AppContentsGenreDetailsPage;

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
