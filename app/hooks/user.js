// Libs
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import api from "app/utils/swr";
import { useCallback, useState } from "react";

// Component
import {
  SuccessNotification,
  ErrorNotification,
  WarningNotification,
} from "app/components/utils/notification";

//TODO: Match with backend endpoint
const pathName = "/user"; // End point
const msgHead = "user"; // Just For message

//? ============== INFINITE HOOK ============= ?//
export const useUsersLoad = ({ limit = 15, queryString = "" }) => {
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

export const useUsers = ({ queryString = "" }) => {
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
        if (res.success == true) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `A new ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else if (res.success == "EXIST") {
          WarningNotification({
            message: "User Already Exist!",
            description: "Account with this email already exist. Please try with another email",
          });
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

  //#region send OTP data
  const onSendOTP = useCallback(async (data) => {
    try {
      setLoading(true);
      const { data: res } = await api.post(`${pathName}/otp`, data);
      if (res.success) {
        return res.success;
      } else {
        ErrorNotification({
          message: "User not found!",
          description: `Please try to sign-in with other phone number or email`,
        });
      }
    } catch (error) {
      ErrorNotification({
        message: "Error",
        description: `Something went wrong while sending OTP`,
      });
    }
  }, []);

  return {
    data: results,
    total,
    loading: (!error && !data) || isValidating || loading,
    onAdd,
    onDelete,
    onSendOTP,
  };
};

// * ====================================== * //

//? ============== SPECIFIC HOOK (SINGLE DATA) ============= ?//

export const useUser = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const [loading, setLoading] = useState(false);

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;
  const total = data?.total;

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

  // Edit Profile Image Hook Function
  const onEditProfileImage = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(`${pathKeys}/profile-image`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Edited profile image of ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing profile image of ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing profile image of ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Edit Profile Banner Image Hook Function
  const onEditBannerImage = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(`${pathKeys}/banner-image`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Edited banner image of ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing banner image of ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing banner image of ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Edit Status Hook Function
  const onEditStatus = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.patch(`${pathKeys}/status`, data);
        if (res.success) {
          mutate();
          if (res.data.status) {
            SuccessNotification({
              message: "Congratulation!",
              description: `This account has been successfully activated.`,
            });
          } else {
            SuccessNotification({
              message: "Success",
              description: `This account has been successfully inactivated.`,
            });
          }
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while activation account of ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while activation account of ${msgHead}`,
        });

        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  // Edit Role Hook Function
  const onEditRole = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.patch(`${pathKeys}/role`, data);
        if (res.success) {
          mutate();
          SuccessNotification({
            message: "Success",
            description: `Edited role of ${msgHead} has successfully saved.`,
          });
          return res.success;
        } else {
          ErrorNotification({
            message: "Error",
            description: `Something went wrong while editing role of ${msgHead}`,
          });

          return res.success;
        }
      } catch (error) {
        ErrorNotification({
          message: "Error",
          description: `Something went wrong while editing role of ${msgHead}`,
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
    onEditInfo,
    onEditPassword,
    onEditBilling,
    onEditProfileImage,
    onEditBannerImage,
    onEditStatus,
    onEditRole,
  };
};

// * ====================================== * //
