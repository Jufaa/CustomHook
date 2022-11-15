import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  const getUrl = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const res = await fetch(url);
    const data = await res.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };
  useEffect(() => {
    getUrl();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
