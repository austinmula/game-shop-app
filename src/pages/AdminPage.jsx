import AddMovieForm from "../components/admin/AddMovieForm";

const AdminPage = () => {
  return (
    <div className="container">
      <div className="flex h-20 items-center justify-end px-6 text-white">
        <p className="text-sm">Admin</p>
      </div>
      <AddMovieForm />
    </div>
  );
};

export default AdminPage;
