// Libs
import { Col, Menu, Spin, Dropdown, Empty, Row, Carousel } from "antd";
import { useState } from "react";
import propTypes from "prop-types";
import {
  DownOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  CompassOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesProfileTransactionItemHeader from "./header";
import ThemesProfileTransactionItem from "./item";
import ThemesProfileTransactionItemFooter from "./footer";
import ThemesCarouselMenu from "themes/components/libs/carousel-menu";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Hooks
import { useOrderLoad } from "app/hooks/order";

// Styles
import s from "./index.module.scss";
import { fadeTopToBottom, fadingLeftToRight } from "app/database/framer-motion";

function ThemesContentsProfileTransaction(props) {
  const { userId } = props;
  const { width } = useWindowSize();
  const { router } = useRouter();

  //? ============== Handle Filter ============= ?//
  const [currentStatus, setCurrentStatus] = useState("");
  const handleOrderStatus = (value) => {
    const parseKey = value.key.toUpperCase();
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
    { label: <div style={{ fontWeight: 700 }}>All Order</div>, key: "" },
    { label: <div style={{ fontWeight: 700 }}>Proceed</div>, key: "proceed" },
    { label: <div style={{ fontWeight: 700 }}>Delivered</div>, key: "shipping" },
    { label: <div style={{ fontWeight: 700 }}>Success</div>, key: "success" },
  ];
  // * ====================================== * //

  return (
    <>
      <Col className={s.container}>
        {width > 500 && (
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[""]}
            className={s.menuContainer}
            items={menuItems.map((item) => {
              return { label: <div className={s.menuItem}>{item.label}</div>, key: item.key };
            })}
            onSelect={handleOrderStatus}
          />
        )}
        {width < 500 && (
          <ThemesCarouselMenu
            menuList={menuItems}
            handleSetMenu={handleOrderStatus}
            currentMenu={currentStatus}
          />
        )}

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
