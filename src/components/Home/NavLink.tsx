/* libs */
import { Link, useLocation } from "react-router-dom";

/* interfaces */
import { NavLinkProps } from "../../interface/Props";

export const NavLink = ({ path, title, onClick }: NavLinkProps) => {
  const location = useLocation();

  return (
    <Link to={path} onClick={onClick}>
      <div
        className={`bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
        duration-500 ${
          location.pathname === path
            ? "border-l-8 border-green-600"
            : "opacity-50"
        } text-white`}
      >
        {title}
      </div>
    </Link>
  );
};
