// Libs
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArticleCard from "themes/components/libs/article-card";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContentsArticleSidebar from "./sidebar";

// Styles
import s from "./index.module.scss";
import ThemesContentsArticleInformation from "./information";

function ThemesContentsArticlesDetails() {
  //? ============== Handle Other Article ============= ?//
  const dummyOtherArticle = [{}, {}, {}, {}];
  // * ====================================== * //
  return (
    <>
      {/* //? ============== Article Content Section ============= ?// */}
      <section className={`${s.section}`}>
        <ThemesContainerMain>
          <Row gutter={[32, 0]}>
            <Col xl={{ span: 16 }} xs={{ span: 24 }} className={`${s.rmPadding}`}>
              <ThemesContentsArticleInformation />
            </Col>
            <Col
              xl={{ span: 8 }}
              lg={{ span: 11 }}
              md={{ span: 14 }}
              sm={{ span: 24 }}
              className={`${s.rmPadding}`}
            >
              <ThemesContentsArticleSidebar />
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
            {dummyOtherArticle.map((item, index) => {
              return (
                <Col
                  key={index}
                  xl={{ span: 6 }}
                  lg={{ span: 7 }}
                  md={{ span: 10 }}
                  xs={{ span: 21 }}
                >
                  <ThemesArticleCard />
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

export default ThemesContentsArticlesDetails;
