// Libs
import propTypes from "prop-types";
import { Col } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArticleListCard from "themes/components/libs/article-list-card";
import ThemesHeadline from "themes/components/libs/headline";

// Helpers
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2ArticleListSection(props) {
  const { dataList } = props;

  const viewport = useWindowSize();

  return (
    <>
      <Col className={s.articleContainer}>
        <ThemesContainerMain>
          <ThemesHeadline
            title="News Update"
            subtitle="We provide you latest art info"
            className={s.pageTitle}
          />

          <ThemesContainerMasonry
            breakPoint={
              viewport?.width > 768 ? 3 : viewport?.width <= 768 && viewport?.width > 500 ? 2 : 1
            }
            className={s.articleListContainer}
            columnClassName={s.articleListCard}
          >
            {dataList &&
              dataList?.map((item, index) => {
                return (
                  <Col style={{ marginTop: "40px" }} key={index}>
                    <ThemesArticleListCard
                      className={s.articleListContent}
                      title={item.title}
                      shortDescription={item.short_description}
                      author={item.author}
                      postDate={item.updated_at}
                      thumbnailSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.thumbnail.url}`}
                      url={`/articles/${item.slug}`}
                    />
                  </Col>
                );
              })}
          </ThemesContainerMasonry>
        </ThemesContainerMain>
      </Col>
    </>
  );
}

ThemesContentsHomepageV2ArticleListSection.propTypes = {
  dataList: propTypes.array,
};

export default ThemesContentsHomepageV2ArticleListSection;
