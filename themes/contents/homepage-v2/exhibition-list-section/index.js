// Libs
import Image from "next/image";
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesHomepageExhibitionSection from "themes/components/libs/homepage-exhibition";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2ExhibitionListSection() {
  const { width } = useWindowSize();
  return (
    <>
      <Col className={s.exhibition}>
        <Image
          src="/images/homepage-banner-list-1.jpg"
          alt="exhibition"
          className={s.exhibitionBackground}
          layout="fill"
        />
        <Col>
          <ThemesContainerMain>
            <Row span={24} className={s.exhibitionContainer}>
              <Col
                xl={{ span: 16 }}
                lg={{ span: 16 }}
                md={{ span: 24 }}
                xs={{ span: 24 }}
                className={s.description}
              >
                <p style={{ fontWeight: 700 }}>LATEST EXHIBITIONS</p>
                <h1>DRAWING EXHIBITION</h1>
                <p>
                  First drawing exhibition in Indonesia by Forum Drawing Exhibition on Ubud, Bali
                  Collaborate with Jepun Artfriends
                </p>
                <p style={{ fontWeight: 700 }}>15th May - 29th May</p>
                <Row gutter={[15, 20]}>
                  <Col className={s.btn}>
                    <ThemesButton onClick={() => router.push("/exhibition")} span={24}>
                      {/* //todo: make this push to exhibition details */}
                      GO TO EXHIBITION
                    </ThemesButton>
                  </Col>
                  {width > 500 ? (
                    <Col className={s.btn}>
                      <ThemesButton type={" outlined"} onClick={() => router.push("/exhibition")}>
                        SEE ALL EXHIBITION
                      </ThemesButton>
                    </Col>
                  ) : (
                    ""
                  )}
                </Row>
              </Col>
              {width > 768 ? (
                <Col span={8} className={s.moreExhibitionContainer}>
                  <Col className={s.list}>
                    <ThemesHomepageExhibitionSection />
                    <ThemesHomepageExhibitionSection />
                    <ThemesHomepageExhibitionSection />
                  </Col>
                </Col>
              ) : (
                ""
              )}
            </Row>
          </ThemesContainerMain>
        </Col>
      </Col>
    </>
  );
}

export default ThemesContentsHomepageV2ExhibitionListSection;
