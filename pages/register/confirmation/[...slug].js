// Helper
import { verifyPassword } from "app/helpers/auth";

// Components
import RegisterConfirmationPage from "themes/contents/register/confirmation";

function PageRegisterConfirmation(props) {
  const { email } = props;
  return (
    <>
      <RegisterConfirmationPage email={email} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const email = ctx.params.slug[0];
  const hashedEmail = ctx.params.slug[1];

  const isVerify = await verifyPassword(email, hashedEmail);

  if (isVerify) {
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
