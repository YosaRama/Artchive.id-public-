// Libs
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import api from "app/utils/swr";
import { useCallback, useState } from "react";

// Component
import { SuccessNotification, ErrorNotification } from "app/components/utils/notification";

const pathName = "/order"; // End point
const msgHead = "Order"; // Just For message

//? ============== INFINITE HOOK ============= ?//
export const useOrderLoad = ({ limit = 15, queryString = "" }) => {
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

export const useOrders = ({ queryString = "" }) => {
  const pathKeys = pathName + "?" + queryString;
  const [loading, setLoading] = useState(false);

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;
  const total = data?.total;

  return {
    data: results,
    total,
    loading: (!error && !data) || isValidating || loading,
  };
};

// * ====================================== * //

//? ============== SPECIFIC HOOK (SINGLE DATA) ============= ?//

export const useOrder = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const [loading, setLoading] = useState(false);

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;
  const total = data?.data;

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

  return {
    data: results,
    total,
    loading: (!error && !data) || isValidating || loading,
    onEdit,
  };
};

// * ====================================== * //
