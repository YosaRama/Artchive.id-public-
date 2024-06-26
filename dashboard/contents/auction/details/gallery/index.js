// Libs
import propTypes from "prop-types";
import { Button, Col, Image, Row } from "antd";
import { useSession } from "next-auth/react";

// Components
import AppUploadBox from "dashboard/components/libs/upload-box";
import deleteConfirmModal from "dashboard/components/utils/delete-modal-confirm";

// Hooks
import { useUploads } from "dashboard/hooks/upload";

// Styles
import s from "./index.module.scss";

function AppContentsAuctionDetailsGallery(props) {
  const { galleryData, onAddGallery, onDeleteGallery } = props;

  //? ============== Handle Session ============= ?//
  const { data: session } = useSession();
  // * ====================================== * //

  //? ============== Handle Upload Gallery ============= ?//
  const { onUpload, loading: uploadLoading } = useUploads();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: session?.user?.id,
    });
    if (result.success) {
      onAddGallery({ galleryId: result.data.id });
    }
  };
  // * ====================================== * //

  //? ============== Handle Delete Gallery ============= ?//
  const handleDelete = (id) => {
    onDeleteGallery(id);
  };
  // * ====================================== * //

  return (
    <>
      <Col span={24} style={{ margin: "30px 20px 0" }}>
        <Row gutter={[16, 32]}>
          {galleryData?.length !== 0 &&
            galleryData?.map((item) => {
              return (
                <Col className={s.image} span={8} style={{ textAlign: "center" }} key={item.id}>
                  <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                  <Button
                    onClick={() =>
                      deleteConfirmModal({
                        title: "auction gallery image",
                        onDelete: () => handleDelete(item.id),
                      })
                    }
                    style={{ margin: "10px 0px" }}
                  >
                    Delete
                  </Button>
                </Col>
              );
            })}

          {
            <Col span={8}>
              <AppUploadBox
                className={s.uploadBox}
                onUpload={handleUpload}
                loading={uploadLoading}
              />
            </Col>
          }
        </Row>
      </Col>
    </>
  );
}

AppContentsAuctionDetailsGallery.propTypes = {
  galleryData: propTypes.any,
  onAddGallery: propTypes.func,
  onDeleteGallery: propTypes.func,
};

export default AppContentsAuctionDetailsGallery;
