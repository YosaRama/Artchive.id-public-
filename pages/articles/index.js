// Contents
import ThemesContentsArticlesList from "themes/contents/articles/list";

function PageArticlesList() {
  return (
    <>
      <ThemesContentsArticlesList />
    </>
  );
}

export default PageArticlesList;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
