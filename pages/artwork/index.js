// Contents
import ThemesContentsArtworkList from "themes/contents/artwork/list";

function PageArtworkList() {
  return (
    <>
      <ThemesContentsArtworkList />
    </>
  );
}

export default PageArtworkList;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
