// Contents

import ThemesContentsContactUs from "themes/contents/contact-us";

function PageContactUs() {
  return (
    <>
      <ThemesContentsContactUs />
    </>
  );
}

export default PageContactUs;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
