// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row, Input, Empty, Button, Divider, Select } from "antd";
import { useState } from "react";
import { useSession } from "next-auth/react";

// DummyData
// import { cartListDummyData } from "app/database/dummy/cart";

// Components
import ThemesCartItem from "themes/components/libs/cart";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";

// Data Hook
import { useArtworks } from "app/hooks/artwork";
import { useCarts } from "app/hooks/cart";

// Styles
import s from "./index.module.scss";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import Link from "next/link";

function ThemesContentsCart(props) {
  const router = useRouter();

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  //? ============== Cart Page Hook ============= ?//
  const { data: cartPageItem, onDelete } = useCarts({ queryString: `id=${userId}` });
  // * ====================================== * //

  const { artworkData } = props;

  // //? ============== Cart Hooks ============= ?//
  // const { onDelete } = useCarts({ queryString: "" });
  // // * ====================================== * //

  // //? ============== Delete Cart Handler ============= ?//
  // const handleDeleteCart = () => {
  //   const submission = { cartId: artworkData.id };
  //   onDelete(submission);
  // };

  // * ====================================== * //

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

  //? ============== No Coupon State ============= ?//
  const [noCoupon, setNoCoupon] = useState(false);
  // * ====================================== * //

  //? ============== No Wishlist State ============= ?//
  // const [emptyWishlist, setEmptyWishlist] = useState(false);
  // * ====================================== * //

  //? ============== Handle Total ============= ?//
  const cartTotal = cartPageItem
    ?.map((item) => +item.artwork.markup_price)
    .reduce((a, b) => a + b, 0);
  // * ====================================== * //

  const titleCart = (
    <>
      <h1 className={s.title}>
        {`Your Cart Item : `}{" "}
        {cartPageItem?.length < 2 && (
          <span style={{ color: "#e5890a" }}>{cartPageItem.length} item</span>
        )}
        {cartPageItem?.length >= 2 && (
          <span style={{ color: "#e5890a" }}>{cartPageItem.length} items</span>
        )}
      </h1>
    </>
  );

  const { Option } = Select;

  return (
    <>
      <ThemesContainerMain>
        {/* //? ============== Cart Item Section ============= ?// */}

        <ThemesHeadline title={titleCart} className={s.headline} />
        {cartPageItem?.length != 0 && (
          <Col className={s.cartContainerMain}>
            {cartPageItem?.map((item, index) => {
              return (
                <ThemesCartItem
                  key={index}
                  imgUrl={item.artwork.media_cover.url}
                  price={item.artwork.markup_price}
                  title={item.artwork.title}
                  artist={item.artwork.artist.full_name}
                  material={item.artwork.material}
                  imgWidth={item.artwork.width}
                  height={item.artwork.height}
                  artworkUrl={item.artwork.slug}
                  cartId={item.id}
                />
              );
            })}
          </Col>
        )}

        {cartPageItem?.length == 0 && (
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
              <Button type="primary" onClick={() => router.push("/artwork")}>
                Taste and Take!
              </Button>
            </Empty>
          </Col>
        )}

        {/* // * ====================================== * // */}

        {/* //? ============== Shipping Tax Section ============= ?// */}
        <Col span={24} className={s.shippingSection}>
          <Row className={s.shippingContainer}>
            <Col
              xl={{ span: 16 }}
              lg={{ span: 15 }}
              md={{ span: 13 }}
              // xs={{ span: 24 }}
              className={s.searchCountry}
            >
              <Select
                showSearch
                style={{
                  width:'auto',
                }}
                size="large"
                className={s.searchCountry}
                placeholder="Select your destination"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">Indonesia</Option>
                <Option value="2">Singapore</Option>
                <Option value="3">Malaysia</Option>
                <Option value="4">Philiphines</Option>
                <Option value="5">Japan</Option>
                <Option value="6">China</Option>
              </Select>
            </Col>
            <Col
              xl={{ span: 6 }}
              lg={{ span: 6 }}
              md={{ span: 8 }}
              // xs={{ span: 24 }}
              className={s.shippingCharge}
            >
              Shipping Charge: IDR 5.000.000
            </Col>
          </Row>
        </Col>

        {/* // * ====================================== * // */}

        {/* //? ============== Coupon Section ============= ?// */}
        {!noCoupon && (
          <Col span={24} className={s.couponItem}>
            <Col className={s.couponDesc}>Do you have any coupon?</Col>

            <Col className={s.couponBtnContainer}>
              <Input className={s.couponInput} placeholder="Enter your coupon" />
              <ThemesButton type={"outlined " + s.couponBtn}>SUBMIT</ThemesButton>
            </Col>
          </Col>
        )}
        {/* // * ====================================== * //  */}

        {/* //? ============== Checkout Item Section ============= ?// */}
        <Col className={s.checkoutSection}>
          <Col className={s.checkoutDesc}>
            <h3>Total:</h3>

            <h1>
              {`IDR `}{" "}
              <span style={{ fontWeight: 400 }}> {priceFormatter(`${cartTotal}`, ",")}</span>
            </h1>
          </Col>
          <Col className={s.checkoutBtnContainer}>
            <ThemesButton
              type={"default " + s.checkoutBtn}
              onClick={() => router.push("/checkout")}
            >
              PROCEED
            </ThemesButton>
          </Col>
        </Col>
        {/* // * ====================================== * //  */}

        {/* //? ============== Wishlist Item Section ============= ?// */}
        {/* <ThemesHeadline title="Wishlist" className={s.headline} />
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
        )} */}
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
