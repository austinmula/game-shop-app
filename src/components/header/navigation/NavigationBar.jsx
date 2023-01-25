import { NavLink } from "react-router-dom";
import "./navigation.scss";

const links = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
  { name: "About", path: "/about" },
  { name: "Contacts", path: "/contacts" },
];
const NavigationBar = () => {
  return (
    <div className="navigation">
      <nav>
        <h1 className="logo">Peak Games</h1>
        <ul className="invisible lg:visible">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                className="nav_link"
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
      </nav>
    </div>
  );
};

export default NavigationBar;
