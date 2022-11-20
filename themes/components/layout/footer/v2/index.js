// Libs
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Col, Layout, Row, Divider } from "antd";
const { Footer } = Layout;
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

// Components
import ThemesContainerMain from "themes/components/container/main";

// Styles
import s from "./index.module.scss";

function ThemesFooterV2() {
  const router = useRouter();
  //? ============== Footer Menu ============= ?//
  const footerMenu = [
    { title: "About Us", link: "/about" },
    { title: "Artist", link: "/artist" },
    { title: "Artwork", link: "/artwork" },
    { title: "Contact Us", link: "/contact-us" },
  ];
  // * ====================================== * //

  return (
    <Footer className={s.footer}>
      <ThemesContainerMain sectionclass={s.section}>
        <Col className={s.footerContainer}>
          <Row gutter={(10, 50)} className={s.s}>
            <Col span={7}>
              <Col span={24} className={s.imageContainer} onClick={() => router.push("/")}>
                <Image alt="" src="/images/logo-text-white.png" layout="fill" />
              </Col>
              <p style={{ fontSize: "18px" }}>
                Our mission is to give artist, collector, and gallery a place to communicate
              </p>
            </Col>
            <Col span={4} className={s.descContainer}>
              <h1>Browse</h1>

              <a>Artworks</a>
              <a>Artists</a>
              <a>Exhibitions</a>
              <a>Articles</a>
            </Col>
            <Col span={4} className={s.descContainer}>
              <h1>Take Action</h1>
              <a>Support Us</a>
              <a>Engage With Us</a>
              <a>Contact Us</a>
            </Col>
            <Col span={6} className={s.descContainer}>
              <h1>Contact Us</h1>
              <Row gutter={(5, 10)} style={{ marginBottom: 5 }}>
                <Col span={2} className={s.icon}>
                  <EnvironmentOutlined />
                </Col>
                <Col span={21}>
                  {" "}
                  <a>Jalan Gadung, Denpasar, Bali, Indonesia</a>
                </Col>
              </Row>
              <Row gutter={(5, 10)} style={{ marginBottom: 5 }}>
                <Col span={2} className={s.icon}>
                  <MailOutlined />
                </Col>
                <Col span={21}>
                  <a>artchive@gmail.com</a>
                </Col>
              </Row>
              <Row gutter={(5, 10)} style={{ marginBottom: 5 }}>
                <Col span={2} className={s.icon}>
                  <PhoneOutlined />
                </Col>
                <Col span={21}>
                  <a>+62 858-5839-6893</a>
                </Col>
              </Row>
              <Row gutter={(20, 10)} className={s.logoSocial}>
                <Col className={s.logo}>
                  <InstagramOutlined />
                </Col>
                <Col className={s.logo}>
                  <FacebookOutlined />
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider className={s.divider} />
          <Row span={24} className={s.bottomContainer}>
            <Col span={8}>
              <p>@ 2022 Artchive.id</p>
            </Col>
            <Col>
              <Row gutter={(30, 30)}>
                <Col className={s.terms}>
                  <a>Privacy & Policy</a>
                </Col>
                <Col className={s.terms}>
                  <a>Terms & Conditions</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </ThemesContainerMain>
    </Footer>
  );
}

export default ThemesFooterV2;
