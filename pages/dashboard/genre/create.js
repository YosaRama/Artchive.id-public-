// Contents
import GenreCreate from "app/contents/genre-create";

function GenreCreatePage() {
  return (
    <>
      <GenreCreate />
    </>
  );
}

export default GenreCreatePage;

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
