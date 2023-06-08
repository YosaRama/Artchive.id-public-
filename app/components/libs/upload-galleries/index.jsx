// Libs
import propTypes from "prop-types";
import { Button, Col, Image, Row } from "antd";
import { useSession } from "next-auth/react";

// Components
import AppUploadBox from "../upload-box";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";

// Hooks
import { useUploads } from "app/hooks/upload";

// Styles
import s from "./index.module.scss";

function AppUploadGalleries(props) {
  const { initialGallery, limit, onAddGallery, handleDelete, deleteTitle } = props;

  //? ============== Handle Session ============= ?//
  const { data } = useSession();
  // * ====================================== * //

  //? ============== Handle Upload Gallery ============= ?//
  const { onUpload, loading } = useUploads();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: data?.user?.id,
    });
    if (result.success) {
      onAddGallery(result);
    }
  };

  // * ====================================== * //

  return (
    <>
      <Col span={24}>
        <Row gutter={[16, 32]}>
          {initialGallery?.map((item) => {
            return (
              <Col className={s.image} span={6} style={{ textAlign: "center" }} key={item.id}>
                <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                <Button
                  onClick={() =>
                    deleteConfirmModal({
                      title: deleteTitle,
                      onDelete: () => handleDelete(item.id),
                    })
                  }
                  className={s.btn}
                >
                  Delete
                </Button>
              </Col>
            );
          })}

          {initialGallery?.length < limit && (
            <Col span={6}>
              <AppUploadBox className={s.uploadBox} onUpload={handleUpload} loading={loading} />
            </Col>
          )}
        </Row>
      </Col>
    </>
  );
}

AppUploadGalleries.propTypes = {
  initialGallery: propTypes.any,
  limit: propTypes.number,
  onAddGallery: propTypes.func,
  handleDelete: propTypes.func,
  deleteTitle: propTypes.string,
};

export default AppUploadGalleries;
