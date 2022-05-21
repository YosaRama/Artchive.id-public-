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
  return (
    <>
      {/* //? ============== Article Content Section ============= ?// */}
      <section className={`${s.section}`}>
        <ThemesContainerMain>
          <Row gutter={[32, 0]}>
            <Col span={16}>
              <ThemesContentsArticleInformation />
            </Col>
            <Col span={8}>
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
          <Row gutter={[16, 0]}>
            <Col span={6}>
              <ThemesArticleCard />
            </Col>
            <Col span={6}>
              <ThemesArticleCard />
            </Col>
            <Col span={6}>
              <ThemesArticleCard />
            </Col>
            <Col span={6}>
              <ThemesArticleCard />
            </Col>
          </Row>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

export default ThemesContentsArticlesDetails;
