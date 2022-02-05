// Libs
import propTypes from "prop-types";
import { Result } from "antd";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";
import PageButton from "themes/components/libs/page-button";

function RegisterThankyouPage(props) {
  const router = useRouter();
  const { isVerify } = props;
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
              <PageButton onClick={() => router.push("/signin")}>SIGN IN HERE</PageButton>
            </>
          }
        />
      </section>
    </>
  );
}

RegisterThankyouPage.propTypes = {
  isVerify: propTypes.bool,
};

export default RegisterThankyouPage;
