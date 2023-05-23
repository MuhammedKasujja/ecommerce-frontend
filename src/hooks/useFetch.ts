import { useEffect, useState } from "react";
import axios, { Method } from "axios";
import { PaginationProps } from "src/components/table/pagination/Pagination.type";

type IAPIConfig = {
  type: Method;
  withPagination?: boolean;
  data?: any;
  dependes?: number | boolean;
};

export function useFetch<T>(url: string, config: IAPIConfig) {
  const dependes = config.dependes === undefined ? true : config.dependes;
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String>();
  const [message, setMessage] = useState<String>();
  const [pagination, setPagination] = useState<PaginationProps>();

  useEffect(() => {
    const controller = new AbortController();
    // const source = axios.CancelToken.source();
    const fetchData = async () => {
      setLoading(true);
      setError(undefined);
      setMessage(undefined);
      // setData(undefined);
      const lang = localStorage.getItem("lang") ?? "en";
      if (config.data instanceof FormData) {
        const formData = config.data;
        formData.append("lang", lang);
        config.data = formData;
      } else {
        config.data = {
          ...config.data,
          lang,
        };
      }
      try {
        const response = await axios.request({
          url,
          method: config.type ?? "GET",
          signal: controller.signal,
          data: config.data,
          // cancelToken: source.token
        });
        const { payload, error, message } = response.data;
        setMessage(message);
        if (error) {
          setError(error);
        } else {
          if (config.withPagination) {
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
    if (dependes) {
      fetchData();
    }
    return () => {
      controller.abort();
      // source.cancel()
    };
  }, [url, config.type, dependes]);

  return {
    data,
    loading,
    error,
    pagination,
    message,
  };
}
