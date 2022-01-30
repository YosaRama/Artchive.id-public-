// Libs
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import api from "app/utils/swr";
import { useCallback, useState } from "react";

// Component
import { SuccessNotification, ErrorNotification } from "app/components/libs/notification";

const pathName = "/artwork"; // End point
const msgHead = "artwork"; // Just For message

//? ============== INFINITE HOOK ============= ?//
export const useArtworksLoad = ({ limit = 15, queryString = "" }) => {
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

export const useArtworks = ({ queryString = "" }) => {
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
    total: total,
    loading: (!error && !data) || isValidating || loading,
    onAdd,
    onDelete,
  };
};

// * ====================================== * //

//? ============== SPECIFIC HOOK (SINGLE DATA) ============= ?//

export const useArtwork = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const [loading, setLoading] = useState(false);

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;

  // Edit Hook Function
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
  // ==========================

  // Generate Certificate Hook Function
  const onGenerateCertificate = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.post(`${pathKeys}/certificate`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Generate ${msgHead} certificate has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while generate ${msgHead} certificate`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while generate ${msgHead} certificate`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Edit Cover Image Hook Function
  const onChangeCover = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(`${pathKeys}/cover`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Change ${msgHead} cover image has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while change ${msgHead} cover image`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while change ${msgHead} cover image`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Add Gallery Image Hook Function
  const onAddGallery = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.post(`${pathKeys}/gallery`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `${msgHead} gallery image has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while add ${msgHead} gallery image`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while add ${msgHead} gallery image`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Delete Hook Function
  const onDeleteGallery = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(`${pathKeys}/gallery`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Delete ${msgHead} gallery image has been successfully.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while deleting ${msgHead} gallery image`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while deleting ${msgHead} gallery image`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Delete Hook Function
  const onDelete = useCallback(async () => {
    try {
      setLoading(true);
      const { data: res } = await api.delete(pathKeys);
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
  }, [mutate, pathKeys]);
  // ==========================

  return {
    data: results,
    loading: (!error && !data) || isValidating || loading,
    onEdit,
    onDelete,
    onGenerateCertificate,
    onChangeCover,
    onAddGallery,
    onDeleteGallery,
  };
};

// * ====================================== * //
