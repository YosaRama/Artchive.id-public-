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
    onOk: () => {
      onDelete();
    },
    onCancel: () => {
      onClose && onClose();
    },
  });
}

export default deleteConfirmModal;
