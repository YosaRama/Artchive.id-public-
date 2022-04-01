// Helper
import { verifyPassword } from "app/helpers/auth";

// Contents
import ThemesContentsRegisterThankYou from "themes/contents/register/thank-you";

function PageRegisterThankYou(props) {
  const { isVerify, id, email } = props;
  return (
    <>
      <ThemesContentsRegisterThankYou isVerify={isVerify} id={+id} email={email} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Verification ============= ?//
  const id = ctx.params.slug[0];
  const email = ctx.params.slug[1];
  const hashedEmail = ctx.params.slug[2];
  const isVerify = email && hashedEmail ? await verifyPassword(email, hashedEmail) : false;
  // * ====================================== * //

  return {
    props: {
      id: id,
      email: email,
      isVerify: isVerify,
    },
  };
};

export default PageRegisterThankYou;
