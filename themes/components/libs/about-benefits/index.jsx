// Libs
import propTypes from "prop-types";
import { Image, Col, Card } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesAboutBenefits(props) {
  const { title, description, imageSrc } = props;
  return (
    <>
      <Col span={24} className={s.imageContainer}>
        <div className={s.imageCircle}>
          <Image preview={false} className={s.image} alt="" src={imageSrc} />
        </div>
      </Col>

      <section>
        <Col span={24} className={s.textContainer}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.description}>{description}</p>
        </Col>
      </section>
    </>
  );
}
ThemesAboutBenefits.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  imageSrc: propTypes.string,
};

export default ThemesAboutBenefits;
