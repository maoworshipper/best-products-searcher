import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stream, setStream] = useState(null);

  const fetchData = async (
    url,
    options = {},
    actualStream = ""
  ) => {
    setData(null);
    setError(null);
    setStream(null);
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const dataResponse = await response.json();
      if (dataResponse.statusCode === 500) {
        setStream(actualStream);
        setError(dataResponse);
      } else {
        setStream(actualStream);
        setData(dataResponse);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, stream, fetchData, setError };
};