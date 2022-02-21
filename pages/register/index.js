// Libs
import { getSession } from "next-auth/react";

// Content
import ThemesContentsRegister from "themes/contents/register";

function PageRegister() {
  return (
    <>
      <ThemesContentsRegister />
    </>
  );
}

export default PageRegister;

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
