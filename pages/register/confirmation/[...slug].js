// Helper
import { verifyPassword } from "app/helpers/auth";

// Components
import ThemesContentsRegisterConfirmation from "themes/contents/register/confirmation";

function PageRegisterConfirmation(props) {
  const { email } = props;
  return (
    <>
      <ThemesContentsRegisterConfirmation email={email} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const email = ctx.params.slug[0];
  const hashedEmail = ctx.params.slug[1];

  const isVerify = email && hashedEmail && (await verifyPassword(email, hashedEmail));

  if (email && hashedEmail && isVerify) {
    return {
      props: {
        email: email,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }
};

export default PageRegisterConfirmation;
