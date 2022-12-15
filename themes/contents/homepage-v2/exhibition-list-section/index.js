// Libs
import Image from "next/image";
import { Col, Row } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  leftToRightExhibition,
  textDelay,
  textDelayLeftToRight,
  textDelayRightToLeft,
} from "app/database/framer-motion";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesHomepageExhibitionSection from "themes/components/libs/homepage-exhibition";

// Hooks
import { useExhibitionLoad } from "app/hooks/exhibition";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2ExhibitionListSection(props) {
  const router = useRouter();
  const { width } = useWindowSize();
  const { data: dataExhibition } = useExhibitionLoad({ limit: "3", queryString: "" });

  //? ============== Exhibition Show Handler ============= ?//
  const [copy, setCopy] = useState();
  const showHandler = (e, index) => {
    setCopy(index);
  };
  const dataShow = dataExhibition?.at(copy);
  // * ====================================== * //

  return (
    <>
      <motion.div
        key={copy}
        variants={leftToRightExhibition}
        initial="hidden"
        whileInView="visible"
      >
        <Col className={s.exhibition}>
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/${dataShow?.thumbnail?.url}`}
            alt="exhibition"
            className={s.exhibitionBackground}
            layout="fill"
          />
          <Col>
            <ThemesContainerMain>
              <Row span={24} className={s.exhibitionContainer}>
                <Col
                  xl={{ span: 16 }}
                  lg={{ span: 16 }}
                  md={{ span: 24 }}
                  xs={{ span: 24 }}
                  className={s.description}
                >
                  <motion.div
                    key={copy}
                    variants={textDelayLeftToRight}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {width <= 768 ? <p style={{ fontWeight: 700 }}>LATEST EXHIBITIONS</p> : ""}
                    <h1>{dataShow?.title}</h1>
                    <p>{dataShow?.short_description}</p>
                    <p style={{ fontWeight: 700 }}>
                      {moment(dataShow?.start_date)?.format("MMMM DD, YYYY")} -
                      {moment(dataShow?.end_date)?.format("MMMM DD, YYYY")}
                    </p>
                    <Row gutter={[15, 20]}>
                      <Col className={s.btn}>
                        <ThemesButton
                          onClick={() => router.push(`/exhibition/${dataShow.slug}`)}
                          span={24}
                        >
                          {/* //todo: make this push to exhibition details */}
                          SEE DETAILS
                        </ThemesButton>
                      </Col>
                      {width > 500 ? (
                        <Col className={s.btn}>
                          <ThemesButton
                            type={" outlined"}
                            onClick={() => router.push("/exhibition")}
                          >
                            SEE ALL EXHIBITION
                          </ThemesButton>
                        </Col>
                      ) : (
                        ""
                      )}
                    </Row>
                  </motion.div>
                </Col>
                {width > 768 ? (
                  <Col span={8} className={s.moreExhibitionContainer}>
                    <Col className={s.list}>
                      {dataExhibition?.length > 1 ? (
                        <>
                          <h1
                            style={{
                              color: "white",
                              fontSize: "18px",
                              textDecoration: "underline",
                            }}
                          >
                            Recent Exhibition
                          </h1>

                          {dataExhibition?.map((item, index) => (
                            <ThemesHomepageExhibitionSection
                              key={index}
                              title={item.title}
                              organizedBy={item.organized_by}
                              // slug={`/exhibition/${item.slug}`}
                              onClick={(e) => showHandler(e, index)}
                            />
                          ))}
                        </>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </ThemesContainerMain>
          </Col>
        </Col>
      </motion.div>
    </>
  );
}

export default ThemesContentsHomepageV2ExhibitionListSection;
