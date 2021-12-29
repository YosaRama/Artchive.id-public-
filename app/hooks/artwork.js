// Libs
import useSWR from "swr";
import api from "app/utils/swr";
import { useCallback, useState } from "react";

// Component
import { SuccessNotification, ErrorNotification } from "app/components/libs/notification";

//TODO: Match with backend endpoint
const pathName = "/artwork"; // End point
const msgHead = "artwork"; // Just For message

//? ============== GENERAL HOOK (ALL DATA) ============= ?//

export const useArtworks = ({ queryString = "" }) => {
  const pathKeys = pathName + "?" + queryString;
  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const [loading, setLoading] = useState(false);

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
    data,
    loading: (!error && !data) || isValidating || loading,
    onAdd,
    onDelete,
  };
};

// * ====================================== * //

//? ============== SPECIFIC HOOK (SINGLE DATA) ============= ?//

export const useArtwork = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const [loading, setLoading] = useState(false);

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
            description: `Edited event has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing event`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing event`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  return {
    data,
    loading: (!error && !data) || isValidating || loading,
    onEdit,
  };
};

// * ====================================== * //
