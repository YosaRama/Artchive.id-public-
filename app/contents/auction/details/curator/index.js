// Libs
import propTypes from "prop-types";
import { Button, Col, Divider, Empty, Form, Modal, Row } from "antd";
import { useState } from "react";

// Components
import AppSelectExhibitionArtwork from "app/components/libs/select-exhibition-artwork";
import AppFormPrice from "app/components/libs/form-price";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AppCardArtwork from "app/components/libs/card-artwork";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

function AppContentsAuctionDetailsCurators() {
  const { onAddArtwork, lotsData, onDeleteArtwork, auctionTitle } = props;

  //? ============== Handle Price Modal ============= ?//
  const [priceModal, setPriceModal] = useState(false);
  const handlePriceModal = () => {
    setPriceModal(!priceModal);
  };
  // * ====================================== * //

  //? ============== Handle Add Artist ============= ?//
  const [artworkSelect, setArtworkSelect] = useState("");
  const [startPriceForm] = Form.useForm();
  const [estimationPriceForm] = Form.useForm();

  const handleAddArtwork = () => {
    const submission = {
      artworkId: +artworkSelect,
      price: `${priceForm.getFieldsValue().price}`,
    };
    onAddArtwork(submission);
    handlePriceModal();
    priceForm.resetFields();
  };
  // * ====================================== * //

  //? ============== Handle Delete Artist ============= ?//
  const handleDeleteArtist = (artworkId) => {
    onDeleteArtwork(artworkId);
  };
  // * ====================================== * //
  return (
    <>
      <Col span={12} style={{ marginBottom: 50 }}>
        <p>Search Lots by Artist</p>
        <Row gutter={16} align="middle">
          <Col span={20}>
            <AppSelectExhibitionArtwork setResult={setArtworkSelect} />
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={handlePriceModal}>
              ADD
            </Button>
          </Col>
        </Row>
      </Col>
      <Row gutter={[16, 32]} align="middle">
        {lotsData?.length != 0 ? (
          lotsData?.map((item, index) => {
            return (
              <Col span={8} style={{ marginBottom: 10 }} key={index}>
                <AppCardArtwork
                  image={
                    item?.media_cover
                      ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
                      : "/images/default-images.png"
                  }
                  artistImage={
                    item?.artist?.profile?.url &&
                    `${process.env.NEXT_PUBLIC_S3_URL}/${item?.artist?.profile?.url}`
                  }
                  artistName={item?.artist?.full_name}
                  id={item?.id}
                  size={
                    <>
                      <p>
                        {item?.width} x {item?.height} cm
                      </p>
                      <p>End price : IDR {priceFormatter(`${item?.initial_price}`, ",")} </p>
                    </>
                  }
                  status={item?.status}
                  title={item.title}
                />
                <Col span={24} style={{ textAlign: "center" }}>
                  <Button
                    type="secondary"
                    style={{ marginTop: 10 }}
                    onClick={() =>
                      deleteConfirmModal({
                        title: `artwork from ${auctionTitle}`,
                        onDelete: () => handleDeleteArtist(item.id),
                      })
                    }
                  >
                    Remove
                  </Button>
                </Col>
              </Col>
            );
          })
        ) : (
          <Empty />
        )}
      </Row>

      <Modal
        onOk={handleAddArtwork}
        visible={priceModal}
        onCancel={handlePriceModal}
        title="Auction Starting Bid"
      >
        <Form form={startPriceForm} layout="vertical">
          <p>Auction starting bid</p>
          <AppFormPrice />
        </Form>
        <Divider />
        <Form form={estimationPriceForm} layout="vertical">
          <p>Auction estimation bid</p>
          <AppFormPrice />
        </Form>
      </Modal>
    </>
  );
}

AppContentsAuctionDetailsCurators.propTypes = {
  onAddArtwork: propTypes.func,
  lotsData: propTypes.any,
  onDeleteArtwork: propTypes.func,
  auctionTitle: propTypes.any,
};

export default AppContentsAuctionDetailsCurators;
