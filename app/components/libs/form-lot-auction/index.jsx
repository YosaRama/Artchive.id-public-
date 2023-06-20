// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col, DatePicker, Form, Input, Row, Modal, Switch } from "antd";
import { useState } from "react";

// Styles
import s from "./index.module.scss";
import AppSelectArtwork from "../select-artwork";

function AppFormLotAuction(props) {
  const { onSubmit, isEdit, singleSku, visible, onClose } = props;

  const [artworkSelect, setArtworkSelect] = useState("");

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
        max_stepup: "",
        step: "",
        start_estimation: value.start_estimation,
        end_estimation: value.end_estimation,
        item_status: value.is_showing ? "READY" : "DRAFT",
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
                name="end_estimation"
                label="End Estimation"
                rules={[
                  {
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
};

export default AppFormLotAuction;
