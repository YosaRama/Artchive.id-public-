// Libs
import { Col } from "antd";
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArticleListCard from "themes/components/libs/article-list-card";

// Components
import ThemesBanner from "themes/components/libs/banner";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";
import ThemesButton from "themes/components/libs/button";

function ThemesContentsArticlesList() {
  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
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
            <ThemesArticleListCard className={s.articleListContent} />
            <ThemesArticleListCard className={s.articleListContent} />
            <ThemesArticleListCard className={s.articleListContent} />
            <ThemesArticleListCard className={s.articleListContent} />
            <ThemesArticleListCard className={s.articleListContent} />
            <ThemesArticleListCard className={s.articleListContent} />
            <ThemesArticleListCard className={s.articleListContent} />
          </ThemesContainerMasonry>
        </ThemesContainerMain>
        <Col className={s.articleLoadBtn}>
          <ThemesButton>LOAD MORE</ThemesButton>
        </Col>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

export default ThemesContentsArticlesList;
