// Libs
import { useCallback, useState } from "react";
import axios from "axios";

// Component
import { ErrorNotification, SuccessNotification } from "app/components/utils/notification";

export const useUploads = () => {
  const [loading, setLoading] = useState(false);
  const msgHead = "file";

  const onUpload = async ({ file, userId, artworkId }) => {
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    // Append Data to Form Data
    //! Order is important, always put file bottom
    userId && fmData.append("userId", userId);
    artworkId && fmData.append("artworkId", artworkId);
    fmData.append("uploadFile", file);
    // ================================

    try {
      setLoading(true);
      const res = await axios.post("/api/upload", fmData, config);
      if (res.data.success) {
        SuccessNotification({
          message: "Success",
          description: `A new ${msgHead} has successfully saved.`,
        });
        return res.data;
      } else {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while adding a new ${msgHead}`,
        });
        return res.data.success;
      }
    } catch (error) {
      ErrorNotification({
        message: "Error",
        description: `Something went wrong while adding a new ${msgHead}`,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { onUpload, loading };
};
