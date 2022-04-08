// Contents
import ThemesContentsTerms from "themes/contents/terms";

function PageTerms() {
  return (
    <>
      <ThemesContentsTerms />
    </>
  );
}

export default PageTerms;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
