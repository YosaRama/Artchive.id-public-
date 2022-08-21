import { Modal } from "antd";

function ThemesModal(props) {
  const { children } = props;
  return (
    <>
      <Modal wrapClassName={`frontpage-modal`} {...props}>
        {children}
      </Modal>
    </>
  );
}

export default ThemesModal;
