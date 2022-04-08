// Contents
import ThemesContentsPrivacyPolicies from "themes/contents/privacy-policies";

function PagePrivacyPolicies() {
  return (
    <>
      <ThemesContentsPrivacyPolicies />
    </>
  );
}

export default PagePrivacyPolicies;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
