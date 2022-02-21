// Libs
import propTypes from "prop-types";
import { Col, Result } from "antd";

// Components
import ThemesButton from "themes/components/libs/button";
import { useEffect, useState } from "react";

// Data Hook
import { useMailer } from "app/hooks/mailer";

// Styles
import s from "./index.module.scss";

function RegisterConfirmationPage(props) {
  const { email, status } = props;

  //? ============== Handle Resend Email ============= ?//
  const { onSendMail } = useMailer({ pathName: "/register/confirmation" });

  const [resendActive, setResendActive] = useState(false);
  const [resendLoading, setResendLoading] = useState(30);

  const handleResendEmail = async () => {
    const sendEmail = await onSendMail({ email: email, fullName: email });
    if (sendEmail) {
      setResendActive(!resendActive);
    }
  };

  useEffect(() => {
    if (resendActive) {
      if (resendLoading > 0) {
        setTimeout(() => {
          setResendLoading(resendLoading - 1);
        }, 1000);
      } else {
        setResendActive(false);
        setResendLoading(30);
      }
    } else {
      setResendLoading(30);
    }
  }, [resendActive, resendLoading]);
  // * ====================================== * //

  return (
    <>
      <section className={s.section}>
        <Result
          status="success"
          title="Verify Your Email!"
          subTitle={
            <>
              <Col span={15} style={{ margin: "0 auto" }}>
                <p>
                  We have sent an email to
                  <strong> {email}</strong>. You need to verify your email to continue. If you have
                  not received the verification email, please check your {`"Spam"`} or{" "}
                  {`"Bulk Email"`} folder. You can also click the resend button below to have
                  another email to sent to you.
                </p>
              </Col>
            </>
          }
          extra={
            <>
              <ThemesButton
                onClick={handleResendEmail}
                loading={resendActive}
                type={"default " + s.resendButton}
              >
                {resendActive ? `CHECK YOUR EMAIL` : "RESEND VERIFICATION EMAIL"}
              </ThemesButton>
              {resendActive && (
                <p className={s.resendLoading}>Resend verification email on {resendLoading}s</p>
              )}
            </>
          }
        />
      </section>
    </>
  );
}

RegisterConfirmationPage.propTypes = {
  email: propTypes.string,
};

export default RegisterConfirmationPage;
