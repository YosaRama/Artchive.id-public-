// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col, DatePicker, Form, Input, Row, Modal, Switch } from "antd";
import { useState } from "react";

// Styles
import s from "./index.module.scss";
import AppSelectArtwork from "../select-artwork";

function AppFormLotAuction(props) {
  const { onSubmit, isEdit, singleSku, visible, onClose, initialData } = props;
  const [artworkSelect, setArtworkSelect] = useState("");

  //#region Data initialize
  //? Data Parse
  const initialValues = {
    ...initialData,
    lot_date: [moment(initialData?.started_at), moment(initialData?.stopped_at)],
  };

  //#endregion

  //#region Handle submission
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        current_price: "",
        final_price: "",
        initial_price: value.initial_price,
        is_showing: value.is_showing,
        item_id: !isEdit ? artworkSelect : singleSku,
        max_stepup: value.max_stepup,
        step: value.step,
        start_estimation: value.start_estimation,
        end_estimation: value.end_estimation,
        item_status: value.is_showing ? "READY" : "DRAFT",
        started_at: moment(value.lot_date[0]._d).format("YYYY-MM-DD"),
        stopped_at: moment(value.lot_date[1]._d).format("YYYY-MM-DD"),
      };
      onSubmit(submission);
      handleModalClose();
    });
  };
  //#endregion

  //#region Handle modal close
  const handleModalClose = () => {
    form.resetFields();
    onClose();
  };
  //#endregion

  return (
    <>
      <Modal
        okText="Submit"
        onOk={handleSubmit}
        visible={visible}
        onCancel={handleModalClose}
        width={1000}
        title="Add Lot Item"
        initialValues={isEdit ? initialValues : {}}
      >
        <Form layout="vertical" form={form}>
          {!isEdit ? (
            <Form.Item name={"artwork"} label="Add Item" className={s.artworkSelection}>
              <AppSelectArtwork setResult={setArtworkSelect} selectBy="sku" />
            </Form.Item>
          ) : (
            ""
          )}
          <Form.Item
            name={"initial_price"}
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
              formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
              parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
              addonBefore="Rp"
            />
          </Form.Item>
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item
                name={"start_estimation"}
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
                  formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
                  parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
                  addonBefore="Rp"
                />
              </Form.Item>
            </Col>
            <p style={{ margin: "auto" }}>-</p>
            <Col span={11}>
              <Form.Item
                name={"end_estimation"}
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
                  formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
                  parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
                  addonBefore="Rp"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name={"step"}
            label="Set Bid Price Step"
            rules={[
              {
                required: true,
                message: "Please input step price for this artwork!",
                validator: (_, value) => {
                  if (new RegExp(/^[0-9,.]+$/).test(value)) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Please input correct step!"));
                },
              },
            ]}
          >
            <Input
              style={{ width: "100%" }}
              placeholder="Input bid step"
              formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
              parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
              addonBefore="Rp"
            />
          </Form.Item>
          <Form.Item
            name={"max_stepup"}
            label="Set Max Stepup"
            rules={[
              {
                required: true,
                message: "Please input max stepup for this artwork!",
                validator: (_, value) => {
                  if (new RegExp(/^[0-9,.]+$/).test(value)) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Please input correct max stepup!"));
                },
              },
            ]}
          >
            <Input
              style={{ width: "100%" }}
              placeholder="Input artwork max stepup"
              formatter={(value) => priceFormatter(`Rp ${value}`, ",")}
              parser={(value) => value.replace(/Rp\s?|(,*)/g, "")}
              addonBefore="Rp"
            />
          </Form.Item>
          <Form.Item name={"lot_date"} label="Lot Date">
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
  singleSku: propTypes.any,
  visible: propTypes.bool,
  onClose: propTypes.func,
  initialData: propTypes.any,
};

export default AppFormLotAuction;
