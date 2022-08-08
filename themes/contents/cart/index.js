// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row, Input, Empty, Button } from "antd";
import { useState } from "react";

// DummyData
import { cartListDummyData } from "app/database/dummy/cart";

// Components
import ThemesCartItem from "themes/components/libs/cart";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";

// Data Hook
import { useArtworks } from "app/hooks/artwork";

// Styles
import s from "./index.module.scss";

function ThemesContentsCart(props) {
  const { artworkData } = props;
  const router = useRouter();

  //? ============== Other Artwork Hook ============= ?//
  const { data: otherArtworkData } = useArtworks({
    queryString: `excludeSlug=${artworkData?.slug}&artistId=${artworkData?.artist_id}&client=true&limit=4`,
  });
  // * ====================================== * //

  //? ============== Might Like Artwork Hook ============= ?//
  const genreListData = artworkData?.genre.map((item) => item.id);
  const genreList = genreListData?.join(",");
  const { data: mightLikeData } = useArtworks({
    queryString: `excludeSlug=${artworkData?.slug}&excludeArtist=${artworkData?.artist_id}&genreId=${genreList}&client=true&limit=4`,
  });
  // * ====================================== * //

  //? ============== Data Fetching ============= ?//
  // const { data, total, loading } = useArtworks({
  //   queryString: `limit=${pageSize}&page=${currentPage}`,
  // });
  // * ====================================== * //

  //? ============== Empty Cart State ============= ?//
  const [emptyCart, setEmptyCart] = useState(false);
  // * ====================================== * //

  //? ============== No Coupon State ============= ?//
  const [noCoupon, setNoCoupon] = useState(false);
  // * ====================================== * //

  //? ============== No Wishlist State ============= ?//
  const [emptyWishlist, setEmptyWishlist] = useState(false);
  // * ====================================== * //
  return (
    <>
      <ThemesContainerMain>
        {/* //? ============== Cart Item Section ============= ?// */}

        <ThemesHeadline title="Your Cart" className={s.headline} />
        {!emptyCart && (
          <Col>
            {cartListDummyData.map((item, index) => {
              return (
                <Col key={index}>
                  <ThemesCartItem
                    imgUrl={item.imgUrl}
                    price={item.price}
                    title={item.title}
                    artist={item.artist}
                    material={item.material}
                    width={item.width}
                    height={item.height}
                  />
                </Col>
              );
            })}
          </Col>
        )}
        {emptyCart && (
          <Col
            span={24}
            style={{
              margin: "20px 0px",
              paddingTop: "50px",
              paddingBottom: "50px",
              backgroundImage: "linear-gradient(transparent, white 50%)",
            }}
          >
            <Empty
              imageStyle={{
                height: 60,
              }}
              description={<span>{"Let's grab something!"}</span>}
            >
              <Button type="primary" onClick={() => router.push(`/artwork`)}>
                Taste and Take!
              </Button>
            </Empty>
          </Col>
        )}

        {/* // * ====================================== * // */}

        {/* //? ============== Coupon Section ============= ?// */}
        {!noCoupon && (
          <Col span={24} className={s.couponItem}>
            <Col className={s.couponDesc}>Do you have any coupon?</Col>

            <Col className={s.couponBtnContainer}>
              <Input className={s.couponInput} placeholder="Enter your coupon" />
              <ThemesButton type={"default " + s.couponBtn}>SUBMIT</ThemesButton>
            </Col>
          </Col>
        )}
        {/* // * ====================================== * //  */}

        {/* //? ============== Checkout Item Section ============= ?// */}
        <Col className={s.checkoutSection}>
          <Col className={s.checkoutDesc}>
            <h3>Total:</h3>

            <h1>
              {`IDR `} <span style={{ fontWeight: 400 }}>XXX.XXX.XXX</span>
            </h1>
          </Col>
          <Col className={s.checkoutBtnContainer}>
            <ThemesButton
              type={"default " + s.checkoutBtn}
              onClick={() => (router.push = `/pages/checkout`)}
            >
              CHECKOUT
            </ThemesButton>
          </Col>
        </Col>
        {/* // * ====================================== * //  */}

        {/* //? ============== Wishlist Item Section ============= ?// */}
        <ThemesHeadline title="Wishlist" className={s.headline} />
        {!emptyWishlist && (
          <Col>
            {cartListDummyData.map((item, index) => {
              return (
                <Col key={index}>
                  <ThemesCartItem
                    imgUrl={item.imgUrl}
                    price={item.price}
                    title={item.title}
                    artist={item.artist}
                    material={item.material}
                    width={item.width}
                    height={item.height}
                  />
                </Col>
              );
            })}
          </Col>
        )}
        {emptyWishlist && (
          <Col
            span={24}
            style={{
              margin: "20px 0px",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <Empty
              imageStyle={{
                height: 60,
              }}
              description={<span>{"Sadly there is no wishlist..."}</span>}
            ></Empty>
          </Col>
        )}
        {/* // * ====================================== * //  */}

        {/* //? ============== Might Also Like Section ============= ?// */}
        {mightLikeData?.length != 0 && (
          <section style={{ margin: "100px 0" }}>
            <ThemesHeadline title="You Might Also Like" className={s.sectionTitle} />
            <Row gutter={[16, 0]} className={s.otherSection}>
              {mightLikeData?.map((item) => {
                return (
                  <Col
                    xl={{ span: 6 }}
                    lg={{ span: 7 }}
                    md={{ span: 11 }}
                    xs={{ span: 19 }}
                    key={item.id}
                  >
                    <ThemesArtworkWithFrame
                      imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`}
                      artworkStatus={item.status}
                      artworkTitle={item.title}
                      artworkSize={`${item.width} x ${item.height}`}
                      artworkSlug={`/artwork/${item.slug}`}
                    />
                  </Col>
                );
              })}
            </Row>
            <ThemesDividerWithButton>SEE MORE</ThemesDividerWithButton>
          </section>
        )}
        {/* // * ====================================== * // */}
      </ThemesContainerMain>
    </>
  );
}

ThemesContentsCart.propTypes = {
  artworkData: propTypes.object,
};

export default ThemesContentsCart;
