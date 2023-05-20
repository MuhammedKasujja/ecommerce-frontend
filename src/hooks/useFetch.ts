import { useEffect, useState } from "react";
import axios, { Method } from "axios";
import { PaginationProps } from "src/components/table/pagination/Pagination.type";

type IAPIMethod = {
  type?: Method;
  withPagination: boolean;
};

export function useFetch<T>(
  url: string,
  { type = "GET", withPagination = false }: IAPIMethod
) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>();
  const [pagination, setPagination] = useState<PaginationProps>();

  useEffect(() => {
    const controller = new AbortController();
    // const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.request({
          url,
          method: type,
          signal: controller.signal,
          // cancelToken: source.token
        });
        const { payload, error } = response.data;
        if (error) {
          setError(error);
        } else {
          if (withPagination) {
            // console.log({payload})
            const { data, ...rest } = payload;
            setData(data);
            setPagination({ ...rest });
          } else {
            setData(payload);
          }
        }
      } catch (error) {
        if (!controller.signal.aborted) setError(`${error}`);
        // if (axios.isCancel(error)) setError(`${error}`)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
      // source.cancel()
    };
  }, [url, type]);

  return {
    data,
    loading,
    error,
    pagination,
  };
}
