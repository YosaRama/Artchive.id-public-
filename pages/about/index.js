// Contents
import ThemesContentsAbout from "themes/contents/about";

function PageAbout() {
  return (
    <>
      <ThemesContentsAbout />
    </>
  );
}

export default PageAbout;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
