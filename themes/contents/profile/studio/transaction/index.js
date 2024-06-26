// Libs
import { Col, Menu, Spin, Empty } from "antd";
import { useState } from "react";
import propTypes from "prop-types";
import { motion } from "framer-motion";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesProfileTransactionItemHeader from "./header";
import ThemesProfileTransactionItem from "./item";
import ThemesProfileTransactionItemFooter from "./footer";
import ThemesCarouselMenu from "themes/components/libs/carousel-menu";

// Helpers
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Hooks
import { useOrderLoad } from "dashboard/hooks/order";

// Styles
import s from "./index.module.scss";
import { fadeTopToBottom, fadingLeftToRight } from "dashboard/database/framer-motion";

function ThemesContentsProfileTransaction(props) {
  const { userId } = props;
  const { width } = useWindowSize();

  //? ============== Handle Filter ============= ?//
  const [currentStatus, setCurrentStatus] = useState("");
  const handleOrderStatus = (value) => {
    const parseKey = value.toUpperCase();
    setCurrentStatus(parseKey);
  };
  // * ====================================== * //

  //? ============== Order Hooks ============= ?//
  const {
    data: orderData,
    total,
    size,
    setSize,
    loading: orderLoading,
  } = useOrderLoad({
    limit: 5,
    queryString: `userId=${userId || ""}&status=${currentStatus || ""}`,
  });
  // * ====================================== * //

  //? ============== Handle Load More ============= ?//
  const handleLoadMore = () => {
    setSize(size + 1);
  };
  // * ====================================== * //

  //? ============== Handle Menu ============= ?//
  const menuItems = [
    {
      label: <p>All Order</p>,
      key: "",
    },
    {
      label: <p>Proceed</p>,
      key: "proceed",
    },
    {
      label: <p>Delivered</p>,
      key: "shipping",
    },
    {
      label: <p>Success</p>,
      key: "success",
    },
  ];
  // * ====================================== * //

  return (
    <>
      <Col className={s.container}>
        <div className={s.menuContainer}>
          {menuItems.map((item, index) => {
            return (
              <div
                className={`${s.menuItem} ${
                  item.key.toUpperCase() === currentStatus ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  handleOrderStatus(item.key);
                }}
              >
                {item.label}
              </div>
            );
          })}
        </div>

        {orderData?.length == 0 && (
          <motion.div
            variants={fadeTopToBottom}
            initial="hidden"
            animate="visible"
            className={s.empty}
          >
            <Col>
              {" "}
              <Empty description={<p>Ups, there is no item</p>} />
              <ThemesButton href={"/artwork"}>CONTINUE SHOPPING</ThemesButton>
            </Col>
          </motion.div>
        )}
        {orderData?.length !== 0 &&
          orderData?.map((item, index) => {
            return (
              <Spin key={index} spinning={orderLoading}>
                <motion.div
                  variants={fadingLeftToRight}
                  initial="hidden"
                  animate="visible"
                  className={s.itemContainer}
                >
                  <ThemesProfileTransactionItemHeader
                    transactionTime={item?.transaction_time}
                    orderId={item?.order_id}
                    status={item?.status}
                  />
                  {item?.order_item?.length !== 0 &&
                    item?.order_item.map((items, index) => {
                      return (
                        <>
                          <ThemesProfileTransactionItem
                            imgUrl={items.media_cover.url}
                            artworkUrl={items.slug}
                            title={items.title}
                            artist={items.artist.full_name}
                            material={items.material}
                            imgWidth={items.width}
                            imgHeight={items.height}
                            total={items.markup_price}
                          />
                        </>
                      );
                    })}

                  <ThemesProfileTransactionItemFooter totalAmount={item?.total_amount} />
                </motion.div>
              </Spin>
            );
          })}

        {orderData?.length > 1 && orderData?.length !== total && (
          <Col span={24} style={{ textAlign: "center", marginBottom: 60 }}>
            <ThemesButton onClick={handleLoadMore}>LOAD MORE</ThemesButton>
          </Col>
        )}
      </Col>
    </>
  );
}

ThemesContentsProfileTransaction.propTypes = {
  userId: propTypes.number,
};

export default ThemesContentsProfileTransaction;
