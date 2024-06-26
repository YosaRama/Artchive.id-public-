// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row, Input, Empty, Button, Divider, Select, Skeleton, Image } from "antd";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

// DummyData
// import { cartListDummyData } from "dashboard/database/dummy/cart";

// Components
import ThemesCartItem from "themes/components/libs/cart";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";

// Data Hook
import { useArtworks } from "dashboard/hooks/artwork";
import { useCarts } from "dashboard/hooks/cart";

// Styles
import s from "./index.module.scss";

// Helper
import priceFormatter from "dashboard/helpers/priceFormatter";

function ThemesContentsCart(props) {
  const router = useRouter();

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  //? ============== Cart Page Hook ============= ?//
  const {
    data: cartPageItem,
    loading: cartPageLoading,
    onDelete: cartPageDelete,
  } = useCarts({ queryString: `id=${userId}` });
  // * ====================================== * //

  const { artworkData } = props;

  // * ====================================== * //

  // //? ============== Other Artwork Hook ============= ?//
  // const { data: otherArtworkData } = useArtworks({
  //   queryString: `excludeSlug=${artworkData?.slug}&artistId=${artworkData?.artist_id}&client=true&limit=4`,
  // });
  // * ====================================== * //

  //? ============== Might Like Artwork Hook ============= ?//
  const genreListData = artworkData?.genre.map((item) => item.id);
  const genreList = genreListData?.join(",");
  const { data: mightLikeData } = useArtworks({
    queryString: `excludeSlug=${artworkData?.slug}&excludeArtist=${artworkData?.artist_id}&genreId=${genreList}&client=true&limit=4`,
  });
  // * ====================================== * //

  //? ============== No Coupon State ============= ?//
  const [noCoupon, setNoCoupon] = useState(false);
  // * ====================================== * //

  //? ============== No Wishlist State ============= ?//
  // const [emptyWishlist, setEmptyWishlist] = useState(false);
  // * ====================================== * //

  //? ============== Handle Total ============= ?//
  const cartItemTotal = cartPageItem
    ?.map((item) => +item.artwork.markup_price)
    .reduce((a, b) => a + b, 0);

  const charge = 0;
  const cartTotal = cartItemTotal + charge;
  // * ====================================== * //

  //? ============== Status List Handle ============= ?//
  const statusList =
    cartPageItem && cartPageItem?.every((item) => item.artwork.status == "PUBLISH");

  // * ====================================== * //

  const titleCart = (
    <>
      <h1 className={s.title}>
        Total {cartPageItem?.length < 2 ? "item" : "items"} : <span>{cartPageItem?.length}</span>
      </h1>
    </>
  );

  const { Option } = Select;

  return (
    <>
      <ThemesContainerMain>
        {/* //? ============== Cart Item Section ============= ?// */}
        <ThemesHeadline title={"Cart Details"} className={s.headline} />
        {cartPageItem && <Col className={s.cartCount}>{titleCart}</Col>}

        {!cartPageItem && (
          <>
            <Col className={s.headline}>
              <Skeleton paragraph={false} title={{ width: 350 }} />
            </Col>
            <Col className={s.cartContainerMain}>
              <Skeleton
                avatar={{ shape: "square", size: "large" }}
                className={s.skeletonCartItem}
              />
            </Col>
          </>
        )}

        {cartPageItem?.length != 0 && (
          <Col className={s.cartContainerMain}>
            {cartPageItem?.map((item, index) => {
              return (
                <>
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
                    status={item.status}
                  />
                  {item.artwork.status == "SOLD" && (
                    <Col className={s.warningSold}>
                      <ExclamationCircleOutlined style={{ marginRight: "4px", color: "red" }} />
                      {` Sorry,`} <span style={{ fontWeight: 600 }}> {item.artwork.title}</span>{" "}
                      {`has been sold. Remove this item from your cart to continue checkout.`}
                    </Col>
                  )}
                  <Divider className={s.divider} />
                </>
              );
            })}
          </Col>
        )}

        {cartPageItem?.length == 0 && (
          <Col span={24} className={s.emptyContainer}>
            <Col style={{ textAlign: "center" }}>
              <Col className={s.emptyCartLogo}>
                <Image
                  src="/images/empty-cart.png"
                  alt=""
                  preview={false}
                  className={s.emptyImage}
                />
              </Col>

              <h1>Your Cart is Empty!</h1>
              <p>Look you haven’t made your choice yet..</p>
              <ThemesButton onClick={() => router.push("/artwork")}>CONTINUE SHOPPING</ThemesButton>
            </Col>
          </Col>
        )}

        {/* // * ====================================== * // */}

        {/* //? ============== Shipping Tax Section ============= ?// */}
        {cartPageItem?.length != 0 && (
          <Col span={24} className={s.shippingSection}>
            <Row className={s.shippingContainer}>
              <Col className={s.searchCountry}>
                <Select
                  showSearch
                  style={{
                    maxWidth: "400px",
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
                </Select>
              </Col>
              <Col className={s.shippingCharge}>
                Shipping Charge:{` `}
                <span style={{ fontWeight: 700, marginLeft: "8px" }}>IDR {charge}</span>
              </Col>
            </Row>
          </Col>
        )}

        {/* // * ====================================== * // */}

        {/* //? ============== Coupon Section ============= ?// */}
        {!noCoupon && (
          <Col span={24} className={s.couponItem}>
            <Col className={s.couponDesc}>Do you have any coupon?</Col>

            <Col className={s.couponBtnContainer}>
              <Input className={s.couponInput} placeholder="Enter your coupon" />
              <ThemesButton disabled={true} type={"outlined " + s.couponBtn}>
                SUBMIT
              </ThemesButton>
            </Col>
          </Col>
        )}
        {/* // * ====================================== * //  */}

        {/* //? ============== Checkout Item Section ============= ?// */}
        <Col className={s.checkoutSection}>
          {cartPageItem?.length > 0 && (
            <Col className={s.checkoutDesc}>
              <h3>Total:</h3>
              <h1>
                {`IDR `}{" "}
                <span style={{ fontWeight: 400 }}> {priceFormatter(`${cartTotal}`, ",")}</span>
              </h1>
            </Col>
          )}

          {cartPageItem?.length == 0 && <Col className={s.checkoutDesc} />}

          <Col className={s.checkoutBtnContainer}>
            <ThemesButton
              type={"default " + s.checkoutBtn}
              onClick={() => router.push("/checkout")}
              disabled={cartPageItem == 0 ? true : statusList === false ? true : false}
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
        {/* {mightLikeData?.length != 0 && (
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
        )} */}
        {/* // * ====================================== * // */}
      </ThemesContainerMain>
    </>
  );
}

ThemesContentsCart.propTypes = {
  artworkData: propTypes.object,
};

export default ThemesContentsCart;
