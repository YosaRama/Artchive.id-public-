// Libs
import { getSession } from "next-auth/react";

// Contents
import ThemesContentsCart from "themes/contents/cart";

function PageCart() {
  return (
    <>
      <ThemesContentsCart />
    </>
  );
}

export default PageCart;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: null,
    },
  };
};
