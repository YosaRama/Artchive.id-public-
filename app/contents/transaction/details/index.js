// Libs
import { useRouter } from "next/router";
import { Button, Col, Form, Input, Row, Divider, PageHeader, Spin, Select } from "antd";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import { useOrder } from "app/hooks/order";
import AppTransactionItem from "app/components/libs/transaction-items";

// Data Hook

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Styles
import s from "./index.module.scss";

function AppContentsTransactionDetails() {
  const router = useRouter();
  const { Option } = Select;

  //? ============== Transaction Hook ============= ?//
  const { data: dataDetails, onEdit, loading } = useOrder({ singleId: router.query.id });
  // * ====================================== * //

  //? ============== Handle Update ============= ?//
  const [form] = Form.useForm();
  const handleUpdate = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        title: value.title,
      };
      const result = await onEdit(submission);
      if (result) {
        router.push("/dashboard/genre");
      }
    });
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
          {dataDetails?.order_item &&
            dataDetails?.order_item?.map((item, index) => {
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
            <h1 className={s.textTitle}>Change Status</h1>
            <Select style={{ width: 120 }} defaultValue={dataDetails.status}>
              {" "}
              {/* //TODO : This isn't fix yet*/ / */}
              <Option value="succees">SUCCESS</Option>
              <Option value="shipping">SHIPPING</Option>
              <Option value="pending">PENDING</Option>
              <Option value="proceed">PROCEED</Option>
            </Select>
          </Col>
          <Divider />
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
                  <Col>{priceFormatter(`${dataDetails?.total_amount}`, ",")} </Col>
                </Col>
              </Col>
            </Col>
          </Col>

          <Col span={24} style={{ textAlign: "right", marginTop: "40px" }}>
            <Button type="primary" loading={loading}>
              Save Changes
            </Button>
          </Col>
        </AppContainerCard>
      </Col>
    </AppContainerBox>
  );
}

export default AppContentsTransactionDetails;
