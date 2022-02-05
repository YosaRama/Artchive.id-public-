// Libs
import api from "app/utils/swr";
import { useCallback } from "react";

export const useMailer = ({ pathName }) => {
  const pathKeys = `/mail${pathName}`;
  // Send Mail Hook Function
  const onSendMail = useCallback(
    async (data) => {
      try {
        const { data: res } = await api.post(pathKeys, data);
        return res.success;
      } catch (error) {
        return false;
      }
    },
    [pathKeys]
  );
  // ==========================

  return {
    onSendMail,
  };
};
