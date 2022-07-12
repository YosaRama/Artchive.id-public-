// Dummy Data
import {
  aboutTeamsCard,
  benefitList,
  aboutUsDescription,
  logoPartner,
} from "app/database/dummy/benefit";

// Libs
import React from "react";

import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row, Carousel } from "antd";

// Components
import ThemesBanner from "themes/components/libs/banner";

import ThemesAboutBenefits from "themes/components/libs/about-benefits";
import ThemesAboutDescription from "themes/components/libs/about-description";
import ThemesAboutTeamCard from "themes/components/libs/about-team-card";
import ThemesAboutOurPartner from "themes/components/libs/about-our-partner";
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

const carouselProperties = {
  className: s.carousel,
  centerPadding: "100px",
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  centerMode: true,
  arrows: true,
  adaptiveHeight: true,
  autoplay: true,
  pauseOnFocus: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        centerPadding: "100px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "240px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        centerPadding: "50px",
        slidesToShow: 1,
      },
    },
  ],
};

function ThemesContentsAbout(prop) {
  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesBanner imgSrc="/images/banner-articles-list.jpg" className={"page-bannerContainer"}>
          <div className={"page-bannerTitle"}>
            <Col className={s.bannerTitle}>
              <h1>{"About Us"}</h1>
            </Col>
          </div>
        </ThemesBanner>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Who Are We Section ============= ?// */}

      <Col className={s.aboutUsDescContainer}>
        {aboutUsDescription.map((item, index) => {
          return (
            <ThemesContainerMain key={index}>
              <ThemesAboutDescription title={item.title} description={item.description} />
            </ThemesContainerMain>
          );
        })}
      </Col>

      {/* // * ====================================== * // */}

      {/* //? ============== Benefit Section ============= ?// */}
      <ThemesContainerMain>
        <section className={s.titleSection}>
          <ThemesHeadline title="BENEFITS" subtitle="Join Artchive.id" className={s.pageTitle} />
        </section>
        <Col span={18} className={s.benefitItemContainer}>
          <Row gutter={[20, 50]}>
            {benefitList.map((item, index) => {
              return (
                <Col key={index} className={s.list}>
                  <ThemesAboutBenefits
                    title={item.title}
                    description={item.description}
                    imageSrc={item.imageSrc}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </ThemesContainerMain>
      {/* // * ====================================== * // */}

      {/* //? ============== Our Team Section ============= ?// */}

      <Col className={s.aboutUsTeamContainer}>
        <ThemesContainerMain>
          <section className={s.titleSection1}>
            <ThemesHeadline title="OUR TEAM" subtitle="Artchive.id Teams" className={s.pageTitle} />
          </section>
        </ThemesContainerMain>

        <section>
          <Carousel {...carouselProperties}>
            {aboutTeamsCard.map((item, index) => {
              return (
                <Col key={index}>
                  <ThemesAboutTeamCard
                    className={s.card}
                    imageTeam={item.imageTeam}
                    name={item.name}
                    position={item.position}
                    description={item.description}
                  />
                </Col>
              );
            })}
          </Carousel>
        </section>
      </Col>

      {/* // * ====================================== * // */}

      {/* //? ============== Our Partner Section ============= ?// */}
      <ThemesContainerMain>
        <section className={s.titleSection}>
          <ThemesHeadline
            title="OUR PARTNER"
            subtitle="Artchive.id Partner"
            className={s.pageTitle}
          />
        </section>

        <Col span={24} className={s.ourPartnerContainer}>
          {logoPartner.map((item, index) => {
            return (
              <Col key={index} className={s.ourPartnerLogo}>
                <ThemesAboutOurPartner logoPartner={item.logoPartner} />
              </Col>
            );
          })}
        </Col>

        {/* // * ====================================== * // */}
      </ThemesContainerMain>
    </>
  );
}

export default ThemesContentsAbout;
