import { useState, useEffect } from "react";

interface IReturnUseFetch {
  isLoading: boolean;
  dataSource: any;
}

const useFetch = (url: string): IReturnUseFetch => {
  const [isLoading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const initializeState = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDataSource(data);
      setLoading(false);
    };

    initializeState();
  }, []);

  return { isLoading, dataSource };
};

export default useFetch;
