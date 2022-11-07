// Libs
import propTypes from "prop-types";
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArticleCard from "themes/components/libs/article-card";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContentsArticleInformation from "./information";
import ThemesContentsArticleSidebar from "./sidebar";

// Styles
import s from "./index.module.scss";
import { useArticles } from "app/hooks/articles";
import { useState } from "react";

function ThemesContentsArticlesDetails(props) {
  const { articleData } = props;

  //? ============== Handle Gallery ============= ?//
  const gallery = [
    { id: articleData.thumbnail.id, url: articleData.thumbnail.url },
    articleData.gallery.map((item) => ({ id: item.id, url: item.url })),
  ].flat(1);
  // * ====================================== * //

  //? ============== Handle Other Article ============= ?//
  const { data: otherArticles } = useArticles({ queryString: `excludeSlug=${articleData.slug}` });
  // * ====================================== * //
  return (
    <>
      {/* //? ============== Article Content Section ============= ?// */}
      <section className={`${s.section}`}>
        <ThemesContainerMain>
          <Row gutter={[32, 0]}>
            <Col xl={{ span: 16 }} xs={{ span: 24 }} className={`${s.rmPadding}`}>
              <ThemesContentsArticleInformation
                title={articleData.title}
                description={articleData.content}
                postDate={articleData.updated_at}
                gallery={gallery}
              />
            </Col>
            <Col
              xl={{ span: 8 }}
              lg={{ span: 11 }}
              md={{ span: 14 }}
              sm={{ span: 24 }}
              className={`${s.rmPaddingSideBar}`}
            >
              <ThemesContentsArticleSidebar
                author={articleData.author}
                postDate={articleData.updated_at}
                title={articleData.title}
                slug={articleData.slug}
              />
            </Col>
          </Row>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Other Articles ============= ?// */}
      <section className={`${s.section}`}>
        <ThemesContainerMain>
          <ThemesHeadline title="Other Articles for You" className={s.otherTitle} />
          <Row gutter={[16, 0]} className={s.otherArticleContainer}>
            {otherArticles &&
              otherArticles?.map((item, index) => {
                return (
                  <Col
                    key={index}
                    xl={{ span: 6 }}
                    lg={{ span: 7 }}
                    md={{ span: 10 }}
                    xs={{ span: 21 }}
                  >
                    <ThemesArticleCard
                      title={item.title}
                      imageSrc={item.thumbnail.url}
                      postedDate={item.updated_at}
                      shortDescription={item.short_description}
                      url={item.slug}
                    />
                  </Col>
                );
              })}
          </Row>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsArticlesDetails.propTypes = {
  articleData: propTypes.object,
};

export default ThemesContentsArticlesDetails;
