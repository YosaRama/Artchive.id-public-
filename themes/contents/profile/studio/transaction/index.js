// Libs
import { Col, Menu, Spin } from "antd";
import { useState } from "react";
import propTypes from "prop-types";
import {
  DownOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  CompassOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesProfileTransactionItemHeader from "./header";
import ThemesProfileTransactionItem from "./list";
import ThemesProfileTransactionItemFooter from "./footer";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Hooks
import { useOrderLoad } from "app/hooks/order";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfileTransaction(props) {
  const { userId } = props;
  const { width } = useWindowSize();

  //? ============== Handle Menu ============= ?//
  const menuItems = [
    { label: <div className={s.menuItem}>All Order</div>, key: "" },
    { label: <div className={s.menuItem}> Proceed</div>, key: "proceed" },
    { label: <div className={s.menuItem}>Delivered</div>, key: "shipping" },
    { label: <div className={s.menuItem}>Success</div>, key: "success" },
  ];
  // * ====================================== * //

  //? ============== Handle Menu Mobile ============= ?//
  const menuItemsMobile = [
    {
      label: (
        <div className={s.menuContainerMobile}>
          Your Order Status <DownOutlined className={s.menuIcon} style={{ marginLeft: "6px" }} />
        </div>
      ),

      key: "submenu",
      children: [
        {
          label: (
            <div className={s.menuItemMobile}>
              <ClockCircleOutlined className={s.menuIcon} />
              <p>All Order</p>
            </div>
          ),
          key: "",
        },
        {
          label: (
            <div className={s.menuItemMobile}>
              <SyncOutlined className={s.menuIcon} />
              <p>Proceed</p>
            </div>
          ),
          key: "proceed",
        },
        {
          label: (
            <div className={s.menuItemMobile}>
              <CompassOutlined className={s.menuIcon} />
              <p>Delivered</p>
            </div>
          ),
          key: "shipping",
        },
        {
          label: (
            <div className={s.menuItemMobile}>
              <CheckCircleOutlined className={s.menuIcon} />
              <p>Success</p>
            </div>
          ),
          key: "success",
        },
      ],
    },
    //TODO : Should be "success"//
  ];
  // * ====================================== * //

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

  return (
    <>
      <Col className={s.container}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[""]}
          className={s.menuContainer}
          items={width > 500 ? menuItems : menuItemsMobile}
          onSelect={handleOrderStatus}
        />

        {orderData?.length !== 0 &&
          orderData?.map((item, index) => {
            return (
              <Col key={index} className={s.itemContainer}>
                <Spin spinning={orderLoading}>
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
                </Spin>
              </Col>
            );
          })}

        {orderData?.length !== total && (
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
