import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
    } catch (err) {
      setLoading(false);
      setError('An error occurred. Awkward..');
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
