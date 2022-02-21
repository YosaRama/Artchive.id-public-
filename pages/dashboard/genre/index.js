// Contents
import AppContentsGenreList from "app/contents/genre/list";

function AppContentsGenreListingPage() {
  return (
    <>
      <AppContentsGenreList />
    </>
  );
}

export default AppContentsGenreListingPage;

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
