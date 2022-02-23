import { useEffect, useState } from 'react';

export default function useNotify(url, body) {
  const [status, setStatus] = useState(null);
  const [isPosting, setIsPosting] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      setIsPosting(true);
      fetch(url, { method: 'POST', body: JSON.stringify(body) }).then(status =>
        setStatus(status)
      );
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsPosting(false);
    }
  }, [url, body]);
  return { status, error, isPosting };
}
