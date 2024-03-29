import { useState, useEffect } from "react";
import axios from "axios";

function useApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        // console.log(response.data.data);
        /**
         *  setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, 500);
         */
        setData(response.data.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useApi;
