// Libs
import { Upload } from "antd";

// Data Hook
import { useUploads } from "app/hooks/upload";

// Components
import ContainerBox from "app/components/container/containerBox";
import UploadBox from "app/components/libs/upload-box";

function ArtworkCreate() {
  //? ============== Handle Upload ============= ?//
  const { loading: uploadLoading, onUpload } = useUploads();
  const handleUpload = async (file) => {
    const result = await onUpload({ file: file.file, artistId: 1, artworkId: 2 });
    if (result) {
      console.log("Success Upload");
    }
  };
  // * ====================================== * //

  return (
    <>
      <ContainerBox>
        <UploadBox onUpload={handleUpload} loading={uploadLoading} />
      </ContainerBox>
    </>
  );
}

export default ArtworkCreate;
