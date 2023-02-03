import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getPurchases();
    getUsers();
  }, []);

  async function getPurchases() {
    try {
      const response = await axios.get("http://localhost:4001/api/payments");
      console.log(response.data);
      if (response.data) {
        setPurchases(response.data);
        setTotal(
          response.data.reduce((a, b) => {
            return a + b.amount;
          }, 0)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getUsers() {
    try {
      const response = await axios.get("http://localhost:4001/auth");
      console.log(response.data);
      if (response.data) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AdminContext.Provider value={{ purchases, users, total }}>
      {children}
    </AdminContext.Provider>
  );
};
