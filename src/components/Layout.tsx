import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust path if needed
import Footer from "./Footer"; // Adjust path if needed

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* Ensures page scrolls to top on route change */}
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
