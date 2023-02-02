import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useAdmin() {
  const { user } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user && user.role_id === 2) {
      setIsAdmin(true);
    }
  }, []);

  return { isAdmin };
}
