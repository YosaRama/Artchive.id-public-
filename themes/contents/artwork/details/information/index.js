// Libs
import propTypes from "prop-types";
import { Card, Col, Image, Row } from "antd";
import { useRouter } from "next/router";

// Components
import ThemesShareSocial from "themes/components/libs/share-social";
import ThemesButton from "themes/components/libs/button";

// Helper
import { stringCapitalize } from "app/helpers/capitalize";
import priceFormatter from "app/helpers/priceFormatter";

// Icons
import { WhatsappIcon } from "public/icons/whatsapp-icon";

// Styles
import s from "./index.module.scss";

function ThemesContentsArtworkDetailsInformation(props) {
  const { artworkData } = props;
  const router = useRouter();
  return (
    <>
      <Row gutter={[64, 0]}>
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <Col span={24} style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 10 }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkData?.media_cover?.url}`}
              alt=""
            />
          </Col>
          <Row gutter={[16, 0]} className={s.detailsImageSection}>
            {artworkData?.media_gallery?.map((item) => {
              return (
                <Col
                  xl={{ span: 6 }}
                  lg={{ span: 7 }}
                  md={{ span: 6 }}
                  xs={{ span: 11 }}
                  className={s.detailsImageContainer + " artworkDetails-details-image"}
                  key={item.id}
                >
                  <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <Card className={s.detailsCard}>
            <Col className={s.artworkDetailsTitle}>
              <h1>{artworkData?.title}</h1>
            </Col>
            <Col className={s.artworkDetailsText}>
              <p>
                <strong>
                  <a
                    onClick={() =>
                      router.push(`/artist/${encodeURIComponent(artworkData?.artist?.slug)}`)
                    }
                    className={s.artistName}
                  >
                    {artworkData?.artist?.full_name}
                  </a>
                  ,{" "}
                </strong>
                {artworkData?.artist?.city}
              </p>
              <p>
                <span>{artworkData?.year}, </span>
                {artworkData?.material &&
                  stringCapitalize(artworkData?.material?.replace(/_/g, " "))}
              </p>
              <p>
                <span>{artworkData?.width}</span> x <span>{artworkData?.height} cm</span>
              </p>
            </Col>
            <Col className={s.artworkDetailsDescription}>
              <p>{artworkData?.description}</p>
            </Col>
            <Col className={s.artworkDetailsPrice}>
              <p>
                <strong>IDR</strong>{" "}
                {artworkData?.markup_price && priceFormatter(artworkData?.markup_price, ",")}
              </p>
            </Col>
            <Col className={s.cardBtnContainer}>
              <ThemesButton type={"default " + s.cartBtn} href="/cart">
                ADD TO CART
              </ThemesButton>
              <a
                href={`https://wa.me/${
                  process.env.NEXT_PUBLIC_PHONE_NUMBER
                }?text=${encodeURIComponent(
                  "Hi There, I really interested in this artwork " +
                    process.env.NEXT_PUBLIC_SITE_URL +
                    artworkData?.link +
                    ", Please give me more information about this artwork. Thank you in advance."
                )}`}
                target={"_blank"}
                rel="noreferrer"
              >
                <ThemesButton type={"outlined " + s.requestBtn}>
                  <WhatsappIcon /> REQUEST ARTWORK
                </ThemesButton>
              </a>
            </Col>
            <ThemesShareSocial
              mail={true}
              facebook={true}
              whatsapp={true}
              subject={`Artchive.id Special Artwork`}
              message={`This artwork from ${artworkData?.artist?.full_name} is very interesting`}
              url={`${process.env.NEXT_PUBLIC_SITE_URL}${artworkData.link}`}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

ThemesContentsArtworkDetailsInformation.propTypes = {
  artworkData: propTypes.any.isRequired,
};

export default ThemesContentsArtworkDetailsInformation;
