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
  const footerMenu1 = [
    { title: "Artwork", link: "/artwork" },
    { title: "Artist", link: "/artist" },
    { title: "Exhibitions", link: "/exhibition" },
    { title: "Articles", link: "/articles" },
  ];

  const footerMenu2 = [
    { title: "About Us", link: "/about" },
    { title: "Engage With Us", link: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}` },
    { title: "Contact Us", link: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}` },
  ];

  const footerMenu3 = [
    // {
    //   title: "Jalan Gadung, Denpasar, Bali, Indonesia.",
    //   link: "/",
    //   icon: <EnvironmentOutlined />,
    // },
    { title: "info@artchive.id", link: "/", icon: <MailOutlined /> },
    { title: "+62 821-4566-3008", link: "/", icon: <PhoneOutlined /> },
  ];
  // * ====================================== * //

  return (
    <Footer className={s.footer}>
      <ThemesContainerMain sectionclass={s.section}>
        <Col className={s.footerContainer}>
          <Row gutter={(50, 50)} className={s.s}>
            <Col
              xl={{ span: 8 }}
              lg={{ span: 8 }}
              md={{ span: 24 }}
              xs={{ span: 24 }}
              className={s.logoContainer}
            >
              <Col span={24} className={s.imageContainer} onClick={() => router.push("/")}>
                <Image alt="" src="/images/logo-text-white.png" layout="fill" />
              </Col>
              <p style={{ fontSize: "16px" }}>
                Our mission is to give artist, collector, and gallery a place to communicate!
              </p>
            </Col>
            <Col
              xl={{ span: 5 }}
              lg={{ span: 5 }}
              md={{ span: 8 }}
              xs={{ span: 12 }}
              className={s.descContainer}
            >
              <h1>Browse</h1>
              {footerMenu1.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a>{item.title}</a>
                </Link>
              ))}
            </Col>
            <Col
              xl={{ span: 5 }}
              lg={{ span: 5 }}
              md={{ span: 8 }}
              xs={{ span: 12 }}
              className={s.descContainer}
            >
              <h1>Take Action</h1>
              {footerMenu2.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a>{item.title}</a>
                </Link>
              ))}
            </Col>
            <Col
              xl={{ span: 6 }}
              lg={{ span: 6 }}
              md={{ span: 8 }}
              xs={{ span: 24 }}
              className={s.descContainer}
            >
              <h1>Contact Us</h1>
              {footerMenu3.map((item, index) => (
                <Row gutter={(5, 10)} style={{ marginBottom: 5, width: "auto" }} key={index}>
                  <Col span={2} className={s.icon}>
                    {item.icon}
                  </Col>
                  <Col>
                    <Link href={item.link}>
                      <a>{item.title}</a>
                    </Link>
                  </Col>
                </Row>
              ))}

              <Row gutter={(10, 10)} className={s.logoSocial}>
                <Col className={s.logo}>
                  <Link href="https://www.instagram.com/__artchive.id/" passHref>
                    <InstagramOutlined />
                  </Link>
                </Col>
                <Col className={s.logo}>
                  <Link href="https://www.facebook.com/artchive.id/" passHref>
                    <FacebookOutlined />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider className={s.divider} />
          <Row gutter={[0, 30]} span={24} className={s.bottomContainer}>
            <Col md={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }}>
              <p>@ 2022 Artchive.id</p>
            </Col>
            <Col
              xl={{ span: 8 }}
              lg={{ span: 8 }}
              md={{ span: 12, order: 2 }}
              xs={{ span: 24, order: 1 }}
            >
              <Row gutter={(10, 10)}>
                <Col xs={{ span: 12 }} className={s.terms}>
                  <Link href="/privacy-policies">
                    <a>Privacy & Policy</a>
                  </Link>
                </Col>
                <Col xs={{ span: 12 }} className={s.terms}>
                  <Link href="/terms">
                    <a>Terms & Conditions</a>
                  </Link>
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
