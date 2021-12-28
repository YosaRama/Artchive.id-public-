// Libs
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

function deleteConfirmModal({ title, onDelete, onClose }) {
  confirm({
    title: `Are you sure delete this ${title} ?`,
    icon: <ExclamationCircleOutlined />,
    content: "Do you really want to delete these records ? This process cannot be undone.",
    okText: "Delete",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
      onDelete();
    },
    onCancel() {
      onClose && onClose();
      console.log("Cancel");
    },
  });
}

export default deleteConfirmModal;
