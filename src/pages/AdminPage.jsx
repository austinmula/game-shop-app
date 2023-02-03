import AddMovieForm from "../components/admin/AddMovieForm";
import CardItem from "../components/admin/CardItem";
import MovieTable from "../components/admin/MovieTable";
import Purchases from "../components/admin/Purchases";
import { AdminProvider } from "../context/adminContext";

const AdminPage = () => {
  return (
    <>
      <div className="container">
        <AdminProvider>
          <CardItem />
          <AddMovieForm />
          <MovieTable />
          <Purchases />
        </AdminProvider>
      </div>
    </>
  );
};

export default AdminPage;
