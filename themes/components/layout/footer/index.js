// Libs
import Image from "next/image";
import Link from "next/link";
import { Col, Layout, Row } from "antd";
const { Footer } = Layout;

// Components
import PageContainerBox from "themes/components/container/box-container/indes";

// Styles
import s from "./index.module.scss";

function PageFooter() {
  //? ============== Footer Menu ============= ?//
  const footerMenu = [
    { title: "About Us", link: "/" },
    { title: "Artist", link: "/" },
    { title: "Artwork", link: "/" },
    { title: "Contact Us", link: "/" },
  ];
  // * ====================================== * //

  return (
    <Footer className={s.footer}>
      <PageContainerBox sectionClass={s.section}>
        <Row className={s.topContainer}>
          <Col span={8} className={s.logo}>
            <Image alt="" src="/images/logo-text-white.png" layout="fill" />
          </Col>
          <Col span={24} className={s.linkContainer}>
            <Row justify="center">
              {footerMenu.map((item, index) => (
                <Col className={s.link} key={index}>
                  <Link href={item.link}>
                    <a>
                      <h3>{item.title}</h3>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <div className={s.divider} />

        <Row justify="space-between" className={s.bottomContainer}>
          <Col className={s.social}>
            <Row className={s.socialLink}>
              <Link href="/">
                <a>
                  <p>Instagram</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <p>Facebook</p>
                </a>
              </Link>
            </Row>
          </Col>
          <Col className={s.copyright}>
            <p>© 2022 Artchive.id</p>
          </Col>
          <Col>
            <Row className={s.additionalLink}>
              <Link href="/">
                <a>
                  <p>Privacy Policy</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <p>Terms</p>
                </a>
              </Link>
            </Row>
          </Col>
        </Row>
      </PageContainerBox>
    </Footer>
  );
}

export default PageFooter;
