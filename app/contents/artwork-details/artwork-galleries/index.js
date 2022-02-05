// Libs
import { Button, Col, Image, Row } from "antd";
import { useRouter } from "next/router";

// Data Hook
import { useArtwork } from "app/hooks/artwork";
import { useUploads } from "app/hooks/upload";

// Components
import UploadBox from "app/components/libs/upload-box";
import deleteConfirmModal from "app/components/libs/delete-modal-confirm";

// Styles
import s from "./index.module.scss";

function ArtworkMediaGalleries() {
  const router = useRouter();

  //? ============== Artwork Hook ============= ?//
  const {
    data: artworkData,
    onAddGallery,
    onDeleteGallery,
  } = useArtwork({ singleId: router.query.id });
  // * ====================================== * //

  //? ============== Handle Upload Artwork Gallery ============= ?//
  const { onUpload, loading: uploadLoading } = useUploads();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: artworkData?.artist?.id,
      artworkId: artworkData?.id,
    });
    if (result.success) {
      onAddGallery({ galleryId: result.data.id });
    }
  };
  // * ====================================== * //

  //? ============== Handle Delete Artwork Gallery ============= ?//
  const handleDelete = (id) => {
    onDeleteGallery({ galleryId: id });
  };
  // * ====================================== * //

  return (
    <>
      <Col span={24} style={{ margin: "30px 20px 0" }}>
        <Row gutter={[16, 0]}>
          {artworkData?.media_gallery?.map((item) => {
            return (
              <Col className={s.image} span={6} style={{ textAlign: "center" }} key={item.id}>
                <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                <Button
                  onClick={() =>
                    deleteConfirmModal({
                      title: "artwork gallery image",
                      onDelete: () => handleDelete(item.id),
                    })
                  }
                >
                  Delete
                </Button>
              </Col>
            );
          })}

          {artworkData?.media_gallery?.length < 4 && (
            <Col span={6}>
              <UploadBox className={s.uploadBox} onUpload={handleUpload} loading={uploadLoading} />
            </Col>
          )}
        </Row>
      </Col>
    </>
  );
}

export default ArtworkMediaGalleries;