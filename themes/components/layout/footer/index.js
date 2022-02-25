// Libs
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Col, Layout, Row } from "antd";
const { Footer } = Layout;

// Components
import ThemesContainerMain from "themes/components/container/main";

// Styles
import s from "./index.module.scss";

function ThemesFooter() {
  const router = useRouter();
  //? ============== Footer Menu ============= ?//
  const footerMenu = [
    { title: "About Us", link: "/maintenance" },
    { title: "Artist", link: "/artist" },
    { title: "Artwork", link: "/artwork" },
    { title: "Contact Us", link: "/contact-us" },
  ];
  // * ====================================== * //

  return (
    <Footer className={s.footer}>
      <ThemesContainerMain sectionclass={s.section}>
        <Row className={s.topContainer}>
          <Col span={8} className={s.logo} onClick={() => router.push("/")}>
            <Image alt="" src="/images/logo-text-white.png" layout="fill" />
          </Col>
          <Col span={24} className={s.linkContainer}>
            <Row justify="center" className={s.linkGroup}>
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
          <Col className={s.social} span={8}>
            <Row className={s.socialLink}>
              <a href="https://www.instagram.com/__artchive.id/" target="_blank" rel="noreferrer">
                <Image src="/images/instagram.svg" alt="" width={20} height={20} />
              </a>
              <a href="https://www.facebook.com/artchive.id/" target={"_blank"} rel="noreferrer">
                <Image src="/images/facebook.svg" alt="" width={20} height={20} />
              </a>
            </Row>
          </Col>
          <Col className={s.copyright} span={8}>
            <p>© 2022 Artchive.id</p>
          </Col>
          <Col span={8} className={s.additionalLinkContainer}>
            <Row className={s.additionalLink}>
              <Link href="/maintenance">
                <a>
                  <p>Privacy Policy</p>
                </a>
              </Link>
              <Link href="/maintenance">
                <a>
                  <p>Terms</p>
                </a>
              </Link>
            </Row>
          </Col>
        </Row>
      </ThemesContainerMain>
    </Footer>
  );
}

export default ThemesFooter;
