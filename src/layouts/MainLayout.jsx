import {Outlet} from "react-router-dom";
const MainLayout = () => {
  return (
    <section className="font-poppins">
      <Outlet />
    </section>
  );
};

export default MainLayout;
