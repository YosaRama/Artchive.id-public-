// Libs
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import api from "dashboard/utils/swr";
import { useCallback, useState } from "react";

// Component
import { SuccessNotification, ErrorNotification } from "dashboard/components/utils/notification";

//TODO: Match with backend endpoint
const pathName = "/exhibition"; // End point
const msgHead = "Context"; // Just For message

//? ============== INFINITE HOOK ============= ?//
export const useExhibitionLoad = ({ limit = 15, queryString = "" }) => {
  const { data, size, setSize, error, isValidating } = useSWRInfinite(
    (index, prevData) => {
      const pathKeys = `${pathName}?page=${index + 1}&limit=${limit}&${queryString}`;
      if (prevData && !prevData.data) return null; // reached the end
      return pathKeys;
    },
    { initialSize: 1, persistSize: true }
  );

  // Data processing
  const resultProcess = data?.map((res) => {
    return res?.data;
  });
  const result = resultProcess?.flat(1);
  const total = data?.[0]?.total;
  // =============================

  return {
    data: result,
    total,
    size,
    setSize,
    error,
    loading: (!error && !data) || isValidating,
    end: result?.length == total ? true : false,
  };
};
// * ====================================== * //

//? ============== GENERAL HOOK (ALL DATA) ============= ?//

export const useExhibitions = ({ queryString = "" }) => {
  const pathKeys = pathName + "?" + queryString;
  const [loading, setLoading] = useState(false);

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;
  const total = data?.total;

  // Add Hook Function
  const onAdd = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.post(pathName, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `A new ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while adding a new ${msgHead}`,
          });
          return res.success;
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
    },
    [mutate]
  );
  // ==========================

  // Delete Hook Function
  const onDelete = useCallback(
    async (singleId) => {
      try {
        setLoading(true);
        const { data: res } = await api.delete(pathName + `/${singleId}`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Delete ${msgHead} has been successfully.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while deleting ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while deleting ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [data, mutate]
  );
  // ==========================

  return {
    data: results,
    total,
    loading: (!error && !data) || isValidating || loading,
    onAdd,
    onDelete,
  };
};

// * ====================================== * //

//? ============== SPECIFIC HOOK (SINGLE DATA) ============= ?//

export const useExhibition = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const [loading, setLoading] = useState(false);

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;
  const total = data?.data;

  //? Edit Hook Function
  const onEdit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(pathKeys, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Edited ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );

  //? Edit Artist on Exhibition Hook
  const onAddArtist = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(`${pathKeys}/artist`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Add artist connection on ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while add artist connection on ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while add artist connection on ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );

  //? Delete Artist on Exhibition Hook
  const onDeleteArtist = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.delete(`${pathKeys}/artist?artistId=${data}`);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Delete artist connection on ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while delete artist connection on ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while delete artist connection on ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );

  //? Edit Artwork on Exhibition Hook
  const onAddArtwork = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(`${pathKeys}/artwork`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Add artwork connection on ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while add artwork connection on ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while add artist connection on ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );

  //? Edit Artwork on Exhibition Hook
  const onDeleteArtwork = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const { data: res } = await api.delete(`${pathKeys}/artwork?artworkId=${id}`);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Delete artwork connection on ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while delete artwork connection on ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while delete artist connection on ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );

  //? Edit Media Gallery on Exhibition Hook
  const onAddGallery = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(`${pathKeys}/media-gallery`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Add media on ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while add media on ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while add media on ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );

  //? Delete Media Gallery on Exhibition Hook
  const onDeleteGallery = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const { data: res } = await api.delete(`${pathKeys}/media-gallery?galleryId=${id}`);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Delete media on ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while delete media on ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while delete media on ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );

  return {
    data: results,
    total,
    loading: (!error && !data) || isValidating || loading,
    onEdit,
    onAddArtist,
    onDeleteArtist,
    onAddArtwork,
    onDeleteArtwork,
    onAddGallery,
    onDeleteGallery,
  };
};

// * ====================================== * //