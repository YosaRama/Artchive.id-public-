// Helper
import { verifyPassword } from "app/helpers/auth";

// Contents
import RegisterThankyouPage from "themes/contents/register/thank-you";

function PageThankYouRegistration(props) {
  const { isVerify, id } = props;
  return (
    <>
      <RegisterThankyouPage isVerify={isVerify} id={+id} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.slug[0];
  const email = ctx.params.slug[1];
  const hashedEmail = ctx.params.slug[2];

  const isVerify = email && hashedEmail ? await verifyPassword(email, hashedEmail) : false;

  return {
    props: {
      id: id,
      isVerify: isVerify,
    },
  };
};

export default PageThankYouRegistration;
