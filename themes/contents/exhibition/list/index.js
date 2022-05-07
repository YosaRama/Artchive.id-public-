// Libs
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesExhibitionCard from "themes/components/libs/exhibition-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsExhibitionList() {
  const dummyData = [{}, {}, {}, {}];

  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesBanner imgSrc="/images/banner-exhibition-list.jpg" className="page-bannerContainer">
          <div className="page-bannerTitle">
            <Col>
              <h1>Exhibition List</h1>
            </Col>
          </div>
        </ThemesBanner>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Exhibition List Section ============= ?// */}
      <section className={s.listSection}>
        <ThemesContainerMain>
          <Row gutter={[32, 32]}>
            {dummyData.map((item, index) => {
              return (
                <Col sm={{ span: 12 }} xs={{ span: 24 }} className={s.cardList} key={index}>
                  <ThemesExhibitionCard
                    // thumbnail="/images/artwork-1.jpg"
                    title="Exhibition Title"
                    organizedBy="Group Exhibition from Jepun Artfriends"
                    startDate="2022-05-05"
                    endDate="2022-05-05"
                    description="lorem ipsum dolor sit amet"
                    slug="jepun-artfriends"
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

export default ThemesContentsExhibitionList;
