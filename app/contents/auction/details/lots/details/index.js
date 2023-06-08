// Libs
import { Row, Col, Divider, Image, Table, Empty } from "antd";
import propTypes from "prop-types";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { useState } from "react";

// Components
import ThemesButton from "themes/components/libs/button";
import AuctionLogsColumn from "./utils";
import AppFormLotAuction from "app/components/libs/form-lot-auction";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Style
import s from "./index.module.scss";

function AppContentsAuctionDetailsLotsDetails(props) {
  const { onState, activeLotId, lotDetails } = props;
  const item = lotDetails.find((lot) => lot.id === activeLotId);

  //? ============== Handle Column ============= ?//
  const columns = AuctionLogsColumn({ onDelete: handleDelete });
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "user", onDelete: () => onDelete(id) });
  };
  // * ====================================== * //
  //? ============== Handle Modal ============= ?//
  const [addModal, setAddModal] = useState(false);
  const handleModal = () => {
    setAddModal(!addModal);
  };
  // * ====================================== * //

  return (
    <>
      <ThemesButton onClick={() => onState(onState)} className={s.back}>
        BACK TO LIST
      </ThemesButton>
      <Divider />
      <Col>
        <Row gutter={16} style={{ width: "100%", marginBottom: "20px" }}>
          <Col span={7}>
            <Image
              preview={false}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200px", height: "200px" }}
              src={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`}
              alt=""
            />
          </Col>
          <Col span={16}>
            <p style={{ fontWeight: "bold" }}>{item.title}</p>
            <p>by {item.artist}</p>
            <p>{item.description}</p>
            <p>Start at : {moment(item.start_time).format("DD MMMM, YYYY | hh:mm A")}</p>
            <p>End at : {moment(item.end_time).format("DD MMMM, YYYY | hh:mm A")}</p>

            <p>Final Price : IDR {priceFormatter(`${item.initial_price}`, ",")}</p>
          </Col>
        </Row>
        <Col style={{ textAlign: "right" }}>
          <ThemesButton type="primary" onClick={handleModal}>
            Edit item
          </ThemesButton>
        </Col>
        <Divider />
        <h3 style={{ textAlign: "center" }}>History logs</h3>
        {item?.logs && (
          <Table
            columns={columns}
            rowKey={() => uuid()}
            dataSource={item?.logs}
            // loading={loading}
            // pagination={{ pageSize: pageSize, total: total }}
            // onChange={handlePagination}
          />
        )}
        {!item?.logs && <Empty />}

        <AppFormLotAuction visible={addModal} onClose={handleModal} />
      </Col>
    </>
  );
}

AppContentsAuctionDetailsLotsDetails.propTypes = {
  activeLotId: propTypes.any,
  lotDetails: propTypes.any,
  onState: propTypes.any,
};

export default AppContentsAuctionDetailsLotsDetails;
