// Libs
import { getSession } from "next-auth/react";

// Helper
import { hashPassword } from "app/helpers/auth";

// Content
import RegisterRoleSelectionPage from "themes/contents/register/role-selection";

function PageRegisterRoleSelection(props) {
  const { userId, email, hashEmail } = props;
  return (
    <>
      <RegisterRoleSelectionPage userId={userId} email={email} hashEmail={hashEmail} />
    </>
  );
}

export default PageRegisterRoleSelection;

export const getServerSideProps = async (ctx) => {
  //? ============== Handle Session ============= ?//
  const session = await getSession(ctx);
  const hashEmail = session && (await hashPassword(session.user.email));
  if (session && !session.user.role) {
    return {
      props: {
        userId: session.user.id,
        email: session.user.email,
        hashEmail: hashEmail,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  // * ====================================== * //
};
