// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col, DatePicker, Form, Input, Row, Modal, Switch } from "antd";
import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";

// Components
import AppSelectExhibitionArtwork from "../select-exhibition-artwork";

function AppFormLotAuction(props) {
  const { onSubmit, isEdit, initialData, visible, onClose } = props;
  //? ============== Handle Session ============= ?//
  const { data: session } = useSession();
  // * ====================================== * //

  const formRef = useRef(null);

  const handleModalClose = () => {
    // Reset the form fields
    formRef.current.resetFields();
    // Call the onClose function to close the modal
    onClose();
  };

  //? ============== Handle Initial Data ============= ?//
  //? Data Parse
  const initialValues = {
    ...initialData,
    auction_date: [moment(initialData?.start_date), moment(initialData?.end_date)],
    auction_time: [
      moment(`2022-02-02${initialData?.start_time}`),
      moment(`2022-02-02${initialData?.end_time}`),
    ],
  };

  useEffect(() => {
    if (isEdit) {
      setUploadImage({ id: initialData?.thumbnail?.id, url: initialData?.thumbnail?.url });
      setDescriptionValue(initialData?.description);
    }
  }, []);
  // * ====================================== * //

  //? ============== Handle Add Artist ============= ?//
  const [artworkSelect, setArtworkSelect] = useState("");
  const [startPriceForm] = Form.useForm();
  const [estimationPriceForm] = Form.useForm();

  //? ============== Handle Submission ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        title: value.title,
        initialPrice: value.initial_price,
        estimation: value.estimation,
        isShowing: value.is_showing,
        startDate: moment(value.auction_date[0]).format(),
        endDate: moment(value.auction_date[1]).format(),
        artworkId: +artworkSelect,
        createdBy: +session?.user?.id,
        updatedBy: +session?.user?.id,
      };
      onSubmit(submission);
      handlePriceModal();
      priceForm.resetFields();
    });
  };
  // * ====================================== * //

  return (
    <>
      <Modal
        okText="Submit"
        onOk={handleSubmit}
        visible={visible}
        onCancel={handleModalClose}
        width={1000}
        title="Add Lot Item"
      >
        <Form
          ref={formRef}
          layout="vertical"
          form={form}
          initialValues={isEdit ? initialValues : {}}
        >
          <Form.Item name={"artwork"} label="Add Item">
            <AppSelectExhibitionArtwork setResult={setArtworkSelect} />
          </Form.Item>
          <Form.Item
            name="initial_price"
            label="Set Starting Bid"
            rules={[
              {
                required: true,
                message: "Please input price for this artwork!",
                validator: (_, value) => {
                  if (new RegExp(/^[0-9,.]+$/).test(value)) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Please input correct price!"));
                },
              },
            ]}
          >
            <Input
              style={{ width: "100%" }}
              placeholder="Input artwork price"
              // value={priceFormatter(`Rp ${initialValue}`, ",")}
              // onChange={onChange}
              formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
              parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
              addonBefore="Rp"
            />
          </Form.Item>
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item
                name="start_estimation"
                label="Start Estimation"
                rules={[
                  {
                    required: true,
                    message: "Please input price for this artwork!",
                    validator: (_, value) => {
                      if (new RegExp(/^[0-9,.]+$/).test(value)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("Please input correct price!"));
                    },
                  },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Input artwork price"
                  // value={priceFormatter(`Rp ${initialValue}`, ",")}
                  // onChange={onChange}
                  formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
                  parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
                  addonBefore="Rp"
                />
              </Form.Item>
            </Col>
            <p style={{ margin: "auto" }}>-</p>
            <Col span={11}>
              <Form.Item
                name="end_estimation"
                label="End Estimation"
                rules={[
                  {
                    required: true,
                    message: "Please input price for this artwork!",
                    validator: (_, value) => {
                      if (new RegExp(/^[0-9,.]+$/).test(value)) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("Please input correct price!"));
                    },
                  },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Input artwork price"
                  // value={priceFormatter(`Rp ${initialValue}`, ",")}
                  // onChange={onChange}
                  formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
                  parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
                  addonBefore="Rp"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name={"auction_date"} label="Auction Date">
            <DatePicker.RangePicker />
          </Form.Item>
          <Form.Item name={"is_showing"} label="Show this item?">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

AppFormLotAuction.propTypes = {
  onSubmit: propTypes.func,
  isEdit: propTypes.bool,
  initialData: propTypes.any,
  visible: propTypes.any,
  onClose: propTypes.any,
};

export default AppFormLotAuction;
