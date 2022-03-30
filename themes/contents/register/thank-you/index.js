// Libs
import propTypes from "prop-types";
import { Result } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

// Data Hook
import { useUser } from "app/hooks/user";
import { useMailer } from "app/hooks/mailer";

// Styles
import s from "./index.module.scss";
import ThemesButton from "themes/components/libs/button";

function ThemesContentsRegisterThankYou(props) {
  const router = useRouter();
  const { isVerify, id, email } = props;

  //? ============== Handle Change Status & Welcome Email ============= ?//
  const { onEditStatus } = useUser({ singleId: id });
  const { onSendMail } = useMailer({ pathName: "/register/thank-you" });
  useEffect(() => {
    if (isVerify) {
      onEditStatus({ status: true });
      onSendMail({ email: email });
      signOut();
    }
  }, [email, id, isVerify, onEditStatus, onSendMail]);
  // * ====================================== * //

  return (
    <>
      <section className={s.section}>
        <Result
          status={isVerify ? "success" : "error"}
          title={isVerify ? "Thank You for Join With Us!" : "Something Going Wrong!"}
          subTitle={
            isVerify ? (
              "Welcome to Artchive.id, Enjoy to explore artwork from incredible artist"
            ) : (
              <p>
                Please make sure to click button or link on your email or contact us at
                <span>
                  <a href="mailto:info@artchive.id"> info@artchive.id</a>
                </span>
              </p>
            )
          }
          extra={
            <>
              <ThemesButton onClick={() => router.push("/signin")}>SIGN IN HERE</ThemesButton>
            </>
          }
        />
      </section>
    </>
  );
}

ThemesContentsRegisterThankYou.propTypes = {
  id: propTypes.number,
  isVerify: propTypes.bool,
  email: propTypes.node,
};

export default ThemesContentsRegisterThankYou;
