const { notification } = require("antd");

export const SuccessNotification = ({ message, description }) => {
  notification.success({
    message: message ? message : `Successfully Saved`,
    description: description ? description : "Your data already updated !",
    placement: "topRight",
    style: {
      background: "#f6ffed",
      border: "1px solid #b7eb8f",
    },
    className: "default-notification",
  });
};

export const ErrorNotification = ({ message, description }) => {
  notification.error({
    message: message ? message : `Something Wrong`,
    description: description ? description : "Your data failed to updated !",
    placement: "topRight",
    style: {
      background: "#fff2ef",
      border: "1px solid #ffdfdb",
    },
    className: "default-notification",
  });
};

export const WarningNotification = ({ message, description }) => {
  notification.warning({
    message: message ? message : `Something Wrong`,
    description: description ? description : "Your data failed to updated !",
    placement: "topRight",
    style: {
      background: "#fffbe6",
      border: "1px solid #fffbe6",
    },
    className: "default-notification",
  });
};
