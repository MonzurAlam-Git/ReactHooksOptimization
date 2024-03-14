import { useEffect, useState } from "react";

const useContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const controller = new AbortController();

  const getUser = async () => {
    try {
      const url = await fetch("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      });
      const data = await url.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(users);

  if (loading && !error) {
    <p>Loading</p>;
  }
  return { loading, error, users };
};

export default useContainer;
