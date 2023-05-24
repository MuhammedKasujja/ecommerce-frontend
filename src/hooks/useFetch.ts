import { useEffect, useState } from "react";
import axios, { Method } from "axios";
import { PaginationProps } from "src/components/table/pagination/Pagination.type";
import { AppUtils } from "src/utils";

type IAPIConfig = {
  type: Method;
  withPagination?: boolean;
  data?: any;
  dependes?: number | boolean;
  params?: any;
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
          baseURL: import.meta.env.BACKEND_API_URL,
          url,
          method: config.type ?? "GET",
          signal: controller.signal,
          data: config.data,
          params: config.params,
          // cancelToken: source.token
        });
        const { payload, error, message } = response.data;

        if (message) {
          setMessage(message);
          AppUtils.showNotification(message, "success");
        }

        if (error) {
          setError(error);
          AppUtils.showNotification(error, "error");
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
      } catch (error: any) {
        // console.log({error})
        let errorMessage = null;
        if (error.response && error.response.data) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = error.message;
        }
        if (!controller.signal.aborted) setError(errorMessage);
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
