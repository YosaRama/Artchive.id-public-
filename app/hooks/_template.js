import useSWR from "swr";
import { useCallback, useState } from "react";
import {
  SuccessNotification,
  ErrorNotification,
} from "app/components/libs/notification";

import api from "app/helper/swr";

//TODO: Match with backend endpoint
const pathName = "/api-route"; // End point
const msgHead = "Context"; // Just For message

//TODO : Hook general data (All Data) with query
export const useTemplates = (queryString) => {
  const pathKeys = pathName + "?" + queryString;
  const { data = {}, error, isValidating, mutate } = useSWR(pathKeys);
  const [loading, setLoading] = useState(false);

  const onAdd = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.post(pathName, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `A new event has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while adding a new event`,
          });
          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while adding a new event`,
        });
        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate]
  );

  const onDelete = useCallback(
    async (singleId) => {
      try {
        setLoading(true);
        const { data: res } = await api.delete(pathName + `/${singleId}`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Event has been deleted successfully.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while deleting event`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while deleting event`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [data, mutate]
  );

  return {
    data,
    loading: (!error && !data) || isValidating || loading,
    onAdd,
    onDelete,
  };
};

//TODO : Hook single data with query
export const useTemplate = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const { data = {}, error, isValidating, mutate } = useSWR(pathKeys);
  const [loading, setLoading] = useState(false);

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

  return {
    data,
    loading: (!error && !data) || isValidating || loading,
    onEdit,
  };
};
