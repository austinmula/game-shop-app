import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import About from "./pages/About";
import AdminPage from "./pages/AdminPage";
import Contacts from "./pages/Contacts";
import Games from "./pages/Games";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import SingleGame from "./pages/SingleGame";
import "./styles/main.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedAdmin from "./hooks/ProtectedAdmin";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<Games />}></Route>
          <Route path="games/:id" element={<SingleGame />}></Route>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="admin"
            element={
              <ProtectedAdmin>
                <AdminPage />
              </ProtectedAdmin>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
