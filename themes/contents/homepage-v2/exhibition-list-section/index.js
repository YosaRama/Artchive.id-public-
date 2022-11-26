// Libs
import Image from "next/image";
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesHomepageExhibitionSection from "themes/components/libs/homepage-exhibition";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2ExhibitionListSection() {
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
              <Col className={s.description}>
                <p>EXHIBITIONS</p>
                <h1>DRAWING EXHIBITION</h1>
                <p>
                  First drawing exhibition in Indonesia by Forum Drawing Exhibition on Ubud, Bali
                  Collaborate with Jepun Artfriends
                </p>
                <p>15th May - 29th May</p>
                <Row gutter={[8, 20]}>
                  <Col className={s.btn}>
                    <ThemesButton onClick={() => router.push("/exhibition")}>
                      {/* //todo: make this push to exhibition details */}
                      GO TO EXHIBITION
                    </ThemesButton>
                  </Col>
                  <Col>
                    <Col className={s.btn}>
                      <ThemesButton type={" outlined"} onClick={() => router.push("/exhibition")}>
                        SEE ALL EXHIBITION
                      </ThemesButton>
                    </Col>
                  </Col>
                </Row>
              </Col>
              <Col span={8} className={s.moreExhibitionContainer}>
                <Col className={s.list}>
                  <ThemesHomepageExhibitionSection />
                  <ThemesHomepageExhibitionSection />
                  <ThemesHomepageExhibitionSection />
                </Col>
              </Col>
            </Row>
          </ThemesContainerMain>
        </Col>
      </Col>
    </>
  );
}

export default ThemesContentsHomepageV2ExhibitionListSection;
