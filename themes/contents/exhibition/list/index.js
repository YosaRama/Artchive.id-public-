// Libs
import { Col, Empty, Row, Spin } from "antd";
import { useExhibitionLoad } from "dashboard/hooks/exhibition";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesExhibitionCard from "themes/components/libs/exhibition-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsExhibitionList() {
  //? ============== Exhibition Hook ============= ?//
  const { data: exhibitionData } = useExhibitionLoad({ limit: 10 });
  // * ====================================== * //

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
          {exhibitionData ? (
            <Row gutter={[32, 32]}>
              {exhibitionData?.map((item, index) => {
                return (
                  <Col sm={{ span: 12 }} xs={{ span: 24 }} className={s.cardList} key={index}>
                    <ThemesExhibitionCard
                      thumbnail={`${item?.thumbnail.url}`}
                      title={item?.title}
                      organizedBy={item?.organizedBy}
                      startDate={item.start_date}
                      endDate={item.end_date}
                      description={item.short_description}
                      slug={item.slug}
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Col span={24}>
              <Spin>
                <Empty />
              </Spin>
            </Col>
          )}
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

export default ThemesContentsExhibitionList;
