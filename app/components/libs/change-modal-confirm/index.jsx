// Libs
import { Modal } from "antd";
import { WarningOutlined } from "@ant-design/icons";
const { confirm } = Modal;

function changeConfirmModal({ title, onConfirm, onClose }) {
  confirm({
    title: `Are you sure change this ${title} ?`,
    icon: <WarningOutlined />,
    content: "Do you really want to change these records ? This process cannot be undone.",
    okText: "Save",
    okType: "primary",
    cancelText: "No",
    onOk() {
      onConfirm();
    },
    onCancel() {
      onClose && onClose();
    },
  });
}

export default changeConfirmModal;
