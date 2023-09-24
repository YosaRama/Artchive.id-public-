// LIbs
import { Row, Col, Image } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";

// Styles
import s from "./index.module.scss";
import { Router } from "next/router";

function ThemesContents404() {
  const router = useRouter();
  const description = "Page not found. Please verify the URL or return to our homepage.";
  return (
    <>
      <Col span={24} className={s.pageContainer}>
        <ThemesContainerMain>
          <Row justify="center" className={s.container}>
            <Col
              xl={{ span: 8, order: 1 }}
              lg={{ span: 10, order: 1 }}
              md={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
              className={s.left}
            >
              <Col>
                <h1>Page Not Found</h1>
              </Col>
              <Col>
                <p>{description}</p>
              </Col>
              <ThemesButton onClick={() => router.push("/")}>BACK TO HOMEPAGE</ThemesButton>
            </Col>
            <Col
              xl={{ span: 12, order: 2 }}
              lg={{ span: 12, order: 2 }}
              md={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
              className={s.imageContainer}
            >
              <Image src="/images/404.svg" alt="" preview={false} />
            </Col>
          </Row>
        </ThemesContainerMain>
      </Col>
    </>
  );
}

export default ThemesContents404;
