// Libs
import { getSession } from "next-auth/react";

// Queries
import { GET_CART_BY_USER_ID } from "app/database/query/cart";

// Contents
import ThemesContentsCheckout from "themes/contents/checkout";

function PageCheckout() {
  return (
    <>
      <ThemesContentsCheckout />
    </>
  );
}

export default PageCheckout;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      notFound: true,
    };
  }

  //? ============== Get User Cart ============= ?//
  const cartItem = await GET_CART_BY_USER_ID({ userId: session.user.id });
  // * ====================================== * //

  if (cartItem.length == 0) {
    return {
      props: {
        data: null,
      },
      redirect: {
        destination: "/cart",
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
