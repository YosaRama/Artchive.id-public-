// Contents
import ThemesContentsExhibitionList from "themes/contents/exhibition/list";

function PageExhibitionList() {
  return (
    <>
      <ThemesContentsExhibitionList />
    </>
  );
}

export default PageExhibitionList;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
