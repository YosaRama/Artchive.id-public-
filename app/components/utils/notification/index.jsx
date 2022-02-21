// Libs
import { notification } from "antd";

export const SuccessNotification = ({ message, description }) => {
  notification.success({
    message: message ? message : `Successfully Saved`,
    description: description ? description : "Your data already updated !",
    placement: "topRight",
  });
};

export const ErrorNotification = ({ message, description }) => {
  notification.error({
    message: message ? message : `Something Wrong`,
    description: description ? description : "Your data failed to updated !",
    placement: "topRight",
  });
};

export const WarningNotification = ({ message, description }) => {
  notification.warning({
    message: message ? message : `Something Wrong`,
    description: description ? description : "Your data failed to updated !",
    placement: "topRight",
  });
};
