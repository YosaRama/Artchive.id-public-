// Libs
import api from "app/utils/swr";
import useSWR from "swr";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

// Component
import { ErrorNotification } from "app/components/utils/notification";

//TODO: Match with backend endpoint
const pathName = "/payment"; // End point
const msgHead = "payment"; // Just For message

//? ============== GENERAL HOOK (ALL DATA) ============= ?//
export const usePayments = ({ queryString = "" }) => {
  const router = useRouter();
  const pathKeys = pathName + "?" + queryString;
  const [loading, setLoading] = useState(false);

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;
  const total = data?.total;

  // Add Hook Function
  const onTransaction = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.post(pathName, data);
        if (res.success) {
          mutate();
          router.push(res.data.redirect_url);
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
    [mutate, router]
  );
  // ==========================

  return {
    data: results,
    total,
    loading: (!error && !data) || isValidating || loading,
    onTransaction,
  };
};

// * ====================================== * //
