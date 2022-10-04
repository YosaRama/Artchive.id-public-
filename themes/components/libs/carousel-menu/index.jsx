// Libs
import { Carousel, Col, Row } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesCarouselMenu() {
  const carouselProperties = {
    className: s.carousel,
    centerPadding: "0px",
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 500,
    centerMode: true,
    adaptiveHeight: true,
    swipeToSlide: true,
  };

  return (
    <section>
      <Carousel {...carouselProperties}>
        <Col className={s.menuItem}>
          <p>All Order</p>
        </Col>
        <Col className={s.menuItem}>
          <p>Proceed</p>
        </Col>
        <Col className={s.menuItem}>
          <p>Delivered</p>
        </Col>
        <Col className={s.menuItem}>
          <p>Success</p>
        </Col>
      </Carousel>
    </section>
  );
}

export default ThemesCarouselMenu;
