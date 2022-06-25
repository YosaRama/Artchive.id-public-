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
import { Col, Row } from "antd";

// Components
import ThemesBanner from "themes/components/libs/banner";

import ThemesAboutBenefits from "themes/components/libs/about-benefits";
import ThemesAboutDescription from "themes/components/libs/about-description";
import ThemesAboutTeamCard from "themes/components/libs/about-team-card";
import ThemesAboutOurPartner from "themes/components/libs/about-our-partner";
import ThemesShareSocial from "themes/components/libs/share-social";

// Styles
import s from "./index.module.scss";
import ThemesHeadline from "themes/components/libs/headline";

function ThemesContentsAbout(prop) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
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
      <section>
        <Col span={24} className={s.backgroundAboutDescription}>
          {aboutUsDescription.map((item, index) => {
            return (
              <Col span={22} key={index} className={s.aboutUsDescContainer}>
                <ThemesAboutDescription title={item.title} description={item.description} />
              </Col>
            );
          })}
        </Col>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Benefit Section ============= ?// */}
      <section className={s.titleSection}>
        <ThemesHeadline title="BENEFITS" subtitle="Join Artchive.id" className={s.pageTitle} />
      </section>
      <Col span={18} className={s.benefitItemContainer}>
        <Row gutter={[20, 35]}>
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

      {/* // * ====================================== * // */}

      {/* //? ============== Our Team Section ============= ?// */}

      <Col className={s.backgroundAboutOurTeam}>
        <section className={s.titleSection1}>
          <ThemesHeadline title="OUR TEAM" subtitle="Artchive.id Teams" className={s.pageTitle} />
        </section>

        <section>
          <Row gutter={[0, 24]} className={s.containerTeamsCard}>
            {aboutTeamsCard.map((item, index) => {
              return (
                <Col key={index} className={s.card}>
                  <ThemesAboutTeamCard
                    imageTeam={item.imageTeam}
                    name={item.name}
                    position={item.position}
                    description={item.description}
                    socialMedia1={item.socialMedia1}
                    socialMedia2={item.socialMedia2}
                  />
                </Col>
              );
            })}
          </Row>
        </section>
      </Col>

      {/* // * ====================================== * // */}
      {/* //? ============== Our Partner Section ============= ?// */}
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
    </>
  );
}

export default ThemesContentsAbout;
