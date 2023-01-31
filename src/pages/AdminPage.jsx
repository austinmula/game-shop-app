import AddMovieForm from "../components/admin/AddMovieForm";
import CardItem from "../components/admin/CardItem";
import MovieTable from "../components/admin/MovieTable";

const AdminPage = () => {
  return (
    <>
      <div className="flex h-20 items-center justify-end px-6 text-white  bg-slate-800">
        <p className="text-sm">Admin</p>
      </div>
      <div className="container">
        <CardItem />
        <AddMovieForm />
        <MovieTable />
      </div>
    </>
  );
};

export default AdminPage;
