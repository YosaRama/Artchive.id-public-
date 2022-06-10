// Component
import { Image } from "antd";
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesAboutBenefits() {
  return (
    <>
      <Col span={24} className={s.imageContainer}>
        <div className={s.imageCircle}>
          <Image
            preview={false}
            className={s.image}
            alt=""
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </div>
      </Col>

      <section>
        <Col span={16} className={s.textContainer}>
          <h2 className={s.title}>BENEFIT TITLE</h2>
          <p className={s.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Col>
      </section>
    </>
  );
}

export default ThemesAboutBenefits;
