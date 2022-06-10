// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row } from "antd";

// Components
import ThemesBanner from "themes/components/libs/banner";
import ThemesContainerMain from "themes/components/container/main";
import ThemesAboutBenefits from "themes/components/libs/about-benefits";

// Styles
import s from "./index.module.scss";
import ThemesHeadline from "themes/components/libs/headline";

function ThemesContentsAbout() {
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
      {/* //? ============== Who Are We Section ============= ?// */}
      {/* // * ====================================== * // */}
      {/* //? ============== Benefit Section ============= ?// */}
      <section className={s.titleSection}>
        <ThemesHeadline
          title="Benefits"
          subtitle="Benefit Joining Arthcive"
          className={s.pageTitle}
        />
      </section>
      {/* <section>
        <Row gutter={[16, 0]} className={s.list}>
          {ThemesAboutBenefits(() => (
            <Col></Col>
          ))}
          {ThemesAboutBenefits(() => (
            <Col></Col>
          ))}
        </Row>
        <Row gutter={[16, 0]} className={s.list}>
          {ThemesAboutBenefits(() => (
            <Col></Col>
          ))}
          {ThemesAboutBenefits(() => (
            <Col></Col>
          ))}
        </Row>
      </section> */}
      <Row gutter={[16, 32]}>
        <Col span={12}>
          <ThemesAboutBenefits></ThemesAboutBenefits>
        </Col>
        <Col span={12}>
          <ThemesAboutBenefits></ThemesAboutBenefits>
        </Col>
        <Col span={12}>
          <ThemesAboutBenefits></ThemesAboutBenefits>
        </Col>
        <Col span={12}>
          <ThemesAboutBenefits></ThemesAboutBenefits>
        </Col>
      </Row>
      {/* // * ====================================== * // */}
      {/* //? ============== Banner Section ============= ?// */}
      {/* // * ====================================== * // */}
      {/* //? ============== Banner Section ============= ?// */}
      {/* // * ====================================== * // */} );
    </>
  );
}

export default ThemesContentsAbout;
