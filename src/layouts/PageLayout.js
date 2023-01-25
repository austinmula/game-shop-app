import { Outlet } from "react-router-dom";
import NavigationBar from "../components/header/navigation/NavigationBar";
const PageLayout = () => {
  return (
    <div className="wrapper">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
