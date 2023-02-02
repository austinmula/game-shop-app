import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../../actions/auth";
import useAdmin from "../../../hooks/useAdmin";
import "./navigation.scss";
const links = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
  { name: "About", path: "/about" },
  { name: "Contacts", path: "/contacts" },
  { name: "Admin", path: "/admin" },
];
const NavigationBar = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { isAdmin } = useAdmin();
  const isadmin = user && user?.role_id === 2;

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="navigation">
      <nav>
        <h1 className="logo">Peak Games</h1>
        <div className="flex gap-1 items-center">
          <ul className="invisible lg:visible">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  className={`nav_link ${
                    link.name === "Admin" && !isAdmin ? "hidden" : "block"
                  }`}
                  to={link.path}
                  style={({ isActive }) => ({
                    background: isActive ? "#4f5d75" : "",
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {!isLoggedIn ? (
            <Link to="/login" className="btn">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded-md text-white"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
