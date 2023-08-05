// Libs
import useSWR from "swr";

export const useAuctionItemsLogs = ({ queryString = "", auctionId = "", itemId = "" }) => {
  const pathName = `/auction/${auctionId}/item/${itemId}/logs`;
  const pathKeys = pathName + "?" + queryString;

  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const results = data?.data;

  const onRefresh = () => {
    mutate();
  };

  return {
    data: results,
    loading: (!error && !data) || isValidating,
    onRefresh,
  };
};
