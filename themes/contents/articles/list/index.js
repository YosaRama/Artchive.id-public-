// Libs
import { Col } from "antd";

// Components
import ThemesBanner from "themes/components/libs/banner";
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArticleListCard from "themes/components/libs/article-list-card";
import ThemesButton from "themes/components/libs/button";

// Helpers
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Data Hook
import { useArticlesLoad } from "dashboard/hooks/articles";

// Styles
import s from "./index.module.scss";

function ThemesContentsArticlesList() {
  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  // * ====================================== * //

  //? ============== Articles Hooks ============= ?//
  const { data: articleListData, total: articleListDataTotal } = useArticlesLoad({ limit: 6 });
  // * ====================================== * //

  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesBanner imgSrc="/images/banner-articles-list.jpg" className={"page-bannerContainer"}>
          <div className={"page-bannerTitle"}>
            <Col className={s.bannerTitle}>
              <h1>{"Article List"}</h1>
            </Col>
          </div>
        </ThemesBanner>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Article List Section ============= ?// */}
      <section className={`${s.articleSection}`}>
        <ThemesContainerMain>
          <ThemesContainerMasonry
            breakPoint={
              viewport?.width > 768 ? 3 : viewport?.width <= 768 && viewport?.width > 500 ? 2 : 1
            }
            className={s.articleListContainer}
            columnClassName={s.articleListCard}
          >
            {articleListData &&
              articleListData?.map((item, index) => {
                return (
                  <ThemesArticleListCard
                    className={s.articleListContent}
                    key={index}
                    title={item.title}
                    shortDescription={item.short_description}
                    author={item.author}
                    postDate={item.updated_at}
                    thumbnailSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.thumbnail.url}`}
                    url={`/articles/${item.slug}`}
                  />
                );
              })}
          </ThemesContainerMasonry>
        </ThemesContainerMain>
        {articleListData?.length != articleListDataTotal && (
          <Col className={s.articleLoadBtn}>
            <ThemesButton>LOAD MORE</ThemesButton>
          </Col>
        )}
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

export default ThemesContentsArticlesList;
