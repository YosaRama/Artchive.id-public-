// Helper
import { verifyPassword } from "app/helpers/auth";

// Contents
import RegisterThankyouPage from "themes/contents/register/thank-you";

function PageThankYouRegistration(props) {
  const { isVerify } = props;
  return (
    <>
      <RegisterThankyouPage isVerify={isVerify} />
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
        isVerify: isVerify,
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

export default PageThankYouRegistration;
