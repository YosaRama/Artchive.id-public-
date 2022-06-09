// Contents
import { GET_ALL_ARTICLES_SLUG, GET_ARTICLE_BY_SLUG } from "app/database/query/articles";
import ThemesContentsArticlesDetails from "themes/contents/articles/details";

function PageArticleDetails(props) {
  const { articleData } = props;
  return (
    <>
      <ThemesContentsArticlesDetails articleData={articleData} />
    </>
  );
}

export default PageArticleDetails;

export const getStaticPaths = async () => {
  //? ============== Get All Article Slug ============= ?//
  const allSlug = await GET_ALL_ARTICLES_SLUG();
  // * ====================================== * //

  return {
    paths: allSlug.map((item) => {
      return {
        params: { slug: item.slug },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const currentSlug = ctx.params.slug;

  //? ============== Get Article By Slug ============= ?//
  const articleDataRes = await GET_ARTICLE_BY_SLUG({ slug: currentSlug });
  const articleData = JSON.parse(JSON.stringify(articleDataRes));
  // * ====================================== * //

  if (!articleData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleData: articleData,
    },
    revalidate: 10,
  };
};
