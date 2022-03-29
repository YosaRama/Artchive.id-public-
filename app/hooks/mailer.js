// Libs
import { ErrorNotification } from "app/components/utils/notification";
import api from "app/utils/swr";
import { useCallback, useState } from "react";

export const useMailer = ({ pathName }) => {
  const pathKeys = `/mail${pathName}`;
  const [loading, setLoading] = useState(false);
  // Send Mail Hook Function
  const onSendMail = useCallback(
    async (data) => {
      setLoading(true);
      try {
        const { data: res } = await api.post(pathKeys, data);
        return res.success;
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: "Something went wrong while send email",
        });
        return false;
      } finally {
        setLoading(false);
      }
    },
    [pathKeys]
  );
  // ==========================

  return {
    onSendMail,
    loading,
  };
};
