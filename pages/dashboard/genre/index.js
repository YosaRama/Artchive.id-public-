// Contents
import GenreList from "app/contents/genre-list";

function GenreListingPage() {
  return (
    <>
      <GenreList />
    </>
  );
}

export default GenreListingPage;

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
