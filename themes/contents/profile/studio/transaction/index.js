// Libs
import { Col, Row, Divider, Menu } from "antd";
import propTypes from "prop-types";
import { useState } from "react";

// Styles
import s from "./index.module.scss";

// Components
import ThemesProfileItemTransaction from "themes/components/libs/profile-transaction";

// Dummy
import { transactionList } from "app/database/dummy/transaction";

function ThemesContentsProfileTransaction(props) {
  return (
    <>
      <Col className={s.container}>
        {/* <Col className={s.transactionMenuBar}> */}
        <Menu mode="horizontal" defaultSelectedKeys={["all"]} className={s.menuContainer}>
          <Menu.Item key="all" className={s.menuItem} value="All">
            All
          </Menu.Item>
          <Menu.Item key="proceed" className={s.menuItem} value="Proceed">
            Proceed
          </Menu.Item>
          <Menu.Item key="delivered" className={s.menuItem} value="Delivered">
            Delivered
          </Menu.Item>
          <Menu.Item key="success" className={s.menuItem} value="Success">
            Success
          </Menu.Item>
        </Menu>
        {/* <Row className={s.menuBarButtonContainer}>
            <Col className={s.menuBarButton}>All</Col>
            <Divider type="vertical" style={{ height: "40px", margin: "0px" }} />
            <Col className={s.menuBarButton}>Proceed</Col>
            <Divider type="vertical" style={{ height: "40px", margin: "0px" }} />
            <Col className={s.menuBarButton}>Delivered</Col>
            <Divider type="vertical" style={{ height: "40px", margin: "0px" }} />
            <Col className={s.menuBarButton}>Done</Col>
          </Row> */}
        {/* </Col> */}

        {transactionList.map((item, index) => {
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
      </Col>
    </>
  );
}

export default ThemesContentsProfileTransaction;
