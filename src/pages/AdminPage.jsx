import axios from "axios";
import { useEffect, useState } from "react";
import AddMovieForm from "../components/admin/AddMovieForm";
import CardItem from "../components/admin/CardItem";
import MovieTable from "../components/admin/MovieTable";

const AdminPage = () => {
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
    <>
      <div className="container">
        <CardItem purchases={purchases} total={total} users={users} />
        <AddMovieForm />
        <MovieTable />
      </div>
    </>
  );
};

export default AdminPage;
