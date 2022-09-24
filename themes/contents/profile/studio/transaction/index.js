// Libs
import { Col, Menu } from "antd";
import { useState } from "react";
import propTypes from "prop-types";

// Components
import ThemesProfileItemTransaction from "themes/components/libs/profile-transaction";
import ThemesButton from "themes/components/libs/button";

// Hooks
import { useOrderLoad } from "app/hooks/order";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfileTransaction(props) {
  const { userId } = props;

  //? ============== Handle Menu ============= ?//
  const menuItems = [
    { label: <div className={s.menuItem}>All</div>, key: "" },
    { label: <div className={s.menuItem}>Proceed</div>, key: "proceed" },
    { label: <div className={s.menuItem}>Delivered</div>, key: "shipping" },
    { label: <div className={s.menuItem}>Success</div>, key: "success" },
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
    loading,
  } = useOrderLoad({
    limit: 10,
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
          items={menuItems}
          onSelect={handleOrderStatus}
        />

        {orderData &&
          orderData?.map((item, index) => {
            return (
              <ThemesProfileItemTransaction
                key={index}
                transactionTime={item.transaction_time}
                orderId={item.order_id}
                status={item.status}
                total={item.total_amount}
              />
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
