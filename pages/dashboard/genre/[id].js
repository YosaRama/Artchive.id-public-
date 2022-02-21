// Contents
import AppContentsGenreDetails from "app/contents/genre/details";

function PageDashboardGenreDetails() {
  return (
    <>
      <AppContentsGenreDetails />
    </>
  );
}

export default PageDashboardGenreDetails;

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
        destination: "/dashboard/login",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
