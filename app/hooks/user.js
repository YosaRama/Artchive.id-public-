// Libs
import useSWR from "swr";
import api from "app/utils/swr";
import { useCallback, useState } from "react";

// Component
import { SuccessNotification, ErrorNotification } from "app/components/libs/notification";

//TODO: Match with backend endpoint
const pathName = "/user"; // End point
const msgHead = "user"; // Just For message

//? ============== GENERAL HOOK (ALL DATA) ============= ?//

export const useUsers = ({ queryString = "" }) => {
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

export const useUser = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const [loading, setLoading] = useState(false);

  // Edit General Information Hook Function
  const onEditInfo = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(pathKeys, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Edited general information of ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing general information of ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing general information of ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Edit Password Hook Function
  const onEditPassword = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.patch(pathKeys, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Edited password of ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing password of ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing password of ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Edit Billing Information Hook Function
  const onEditBilling = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(pathKeys, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Edited billing information of ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing billing information of ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing billing information of ${msgHead}`,
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
    onEditInfo,
    onEditPassword,
    onEditBilling,
  };
};

// * ====================================== * //
