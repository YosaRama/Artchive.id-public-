// Libs
import Image from "next/image";
import { Carousel, Col } from "antd";

//
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesHomepageReviewSection from "themes/components/libs/homepage-review-section";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2TestimonialSection() {
  const carouselUserPreview = {
    className: s.carouselUserPreview,
    infinite: true,
    speed: 500,
    centerMode: true,
    arrows: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    draggable: true,
    autoplay: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <Col className={s.reviewContainer}>
        <Image
          src="/images/homepage-banner-list-1.jpg"
          alt="exhibition"
          className={s.reviewBackground}
          layout="fill"
        />

        <ThemesContainerMain>
          <Col className={s.container}>
            <Col>
              <ThemesHeadline
                title="What They Say About Us"
                subtitle="Take a look at our users testimonials"
                className={s.pageTitle}
              />
              <Col span={24} className={s.review}>
                <Carousel {...carouselUserPreview}>
                  <ThemesHomepageReviewSection />
                  <ThemesHomepageReviewSection />
                  <ThemesHomepageReviewSection />
                </Carousel>
              </Col>
            </Col>
          </Col>
        </ThemesContainerMain>
      </Col>
    </>
  );
}

export default ThemesContentsHomepageV2TestimonialSection;
