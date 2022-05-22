// Libs
import { Col } from "antd";

// Components
import ThemesBanner from "themes/components/libs/banner";
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

      <ThemesAboutBenefits />
      <ThemesHeadline title="Halo Bandung" />
    </>
  );
}

export default ThemesContentsAbout;
