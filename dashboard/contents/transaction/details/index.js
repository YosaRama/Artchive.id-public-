// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Row, Divider, PageHeader, Select } from "antd";

// Components
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import AppTransactionItem from "dashboard/components/libs/transaction-items";

// Data Hook
import { useOrder } from "dashboard/hooks/order";

// Helper
import priceFormatter from "dashboard/helpers/priceFormatter";

// Styles
import s from "./index.module.scss";

function AppContentsTransactionDetails() {
  const router = useRouter();
  const { Option } = Select;

  //? ============== Transaction Hook ============= ?//
  const { data: orderDetails, onEdit, loading } = useOrder({ singleId: router.query.id });
  // * ====================================== * //

  //? ============== Handle Update ============= ?//
  const [selectStatus, setSelectStatus] = useState();
  const handleUpdate = async () => {
    const submission = {
      status: selectStatus,
    };
    await onEdit(submission);
  };
  // * ====================================== * //

  return (
    <AppContainerBox>
      <Col span={24} style={{ margin: "0 auto" }}>
        <PageHeader title="Order Details" onBack={() => router.back()} />
        <AppContainerCard>
          <Col>
            <h1 className={s.textTitle}>Order Items</h1>
          </Col>
          {orderDetails?.order_item &&
            orderDetails?.order_item?.map((item, index) => {
              return (
                <AppTransactionItem
                  key={index}
                  imgUrl={item.media_cover.url}
                  artworkUrl={item.slug}
                  title={item.title}
                  artist={item.artist.full_name}
                  material={item.material}
                  imgWidth={item.width}
                  imgHeight={item.height}
                  total={item.markup_price}
                />
              );
            })}
          <Col>
            <Col className={s.subTotalContainer}>
              <Col className={s.subTotalPrice}>
                <Col className={s.textSubtotal}>Subtotal </Col>
                <Col className={s.subtotal}>
                  <Col>IDR</Col>
                  <Col>{priceFormatter(`10000000`, ",")} </Col>
                </Col>
              </Col>
            </Col>
            <Col className={s.subTotalContainer}>
              <Col className={s.subTotalPrice}>
                <Col className={s.textSubtotal}>Shipping Fee </Col>
                <Col className={s.subtotal}>
                  <Col>IDR</Col>
                  <Col>{priceFormatter(`0`, ",")} </Col>
                </Col>
              </Col>
            </Col>
            <Divider className={s.divider} />
            <Col className={s.subTotalContainer}>
              <Col className={s.subTotalPrice}>
                <Col className={s.textTotal}>Total </Col>
                <Col className={s.total}>
                  <Col>IDR</Col>
                  <Col>{priceFormatter(`${orderDetails?.total_amount}`, ",")} </Col>
                </Col>
              </Col>
            </Col>
          </Col>

          <section>
            <Row gutter={[16, 0]}>
              <Col>
                <h1 className={s.textTitle}>Change Status</h1>
              </Col>
              <Col>
                {orderDetails && (
                  <Select
                    style={{ width: 120 }}
                    defaultValue={orderDetails?.status}
                    onChange={(value) => setSelectStatus(value)}
                  >
                    <Option value="SUCCESS">SUCCESS</Option>
                    <Option value="SHIPPING">SHIPPING</Option>
                    <Option value="PENDING">PENDING</Option>
                    <Option value="PROCEED">PROCEED</Option>
                  </Select>
                )}
              </Col>
            </Row>
          </section>

          <Col span={24} style={{ textAlign: "right", marginTop: "40px" }}>
            <Button type="primary" loading={loading} onClick={handleUpdate}>
              Save Changes
            </Button>
          </Col>
        </AppContainerCard>
      </Col>
    </AppContainerBox>
  );
}

export default AppContentsTransactionDetails;
