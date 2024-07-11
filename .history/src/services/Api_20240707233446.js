import { useState, useEffect , useCallback, useRef } from 'react';
import isEqual from 'lodash/isEqual'

const URL_PADRAO = "https://localhost:5000/"

let headers = {
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const Api = {
  
  get: async (recurso, headers = {}) => {

    let url_get = `${URL_PADRAO}/${recurso}`

    try {
      const response = await fetch(url_get, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  post: async (recurso, data, headers = {}) => {

    let url_post = `${URL_PADRAO}/${recurso}`
    try {
      const response = await fetch(url_post, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};


const useApi = (url, method, data = {}, header = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  headers = {...headers, header}

  const memoizedData = useStableDependencies(data);
  const memoizedHeaders = useStableDependencies(headers);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await Api[method](url, memoizedData, memoizedHeaders);
      setResponse(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, method, memoizedData, memoizedHeaders]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { response, error, loading };
};

export default useApi;