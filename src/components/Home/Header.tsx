/* libs */
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react"

/* source */
import Logo from "../../source/logo.png";


export function Header() {
  const location = useLocation();



  let [open, setopen] = useState(false)
  return (
    <>
      <header
        className={`flex items-center justify-between pt-10 px-5 md:px-10 transition-all md:justify-around`}
      >
        <Link to="/" >
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              className="fill-green-600"
              alt="associação cordas logo"
            />

          </div>
        </Link>


      <nav className="flex items-center justify-between ">
        <img alt="" src={open ? "./src/source/icon-close.svg" : "./src/source/icon-hamburger.svg" } className="md:hidden  fixed right-5 cursor-pointer z-20 top-10 " onClick={() => setopen(!open)} />

        <div className={`list-reset md:flex md:items-center gap-11 text-gray-600 font-medium md:pl-10 pt-5  pr-15 md:static   fixed duration-500 px-5 ease-linear top-1 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>

          <Link
            to="/" onClick={() => window.location.href = "/"}
            className={`${location.pathname === "/" ? "text-black-700" : ""
              } flex flex-col items-center justify-center relative`}
          >
            Home
            {location.pathname === "/" ? (
              <div className="w-2 h-2 bg-cyan-400  rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

          <Link
            to="/quemsomos" onClick={() => window.location.href = "/quemsomos"}

            className={`${location.pathname === "/quemsomos" ? "text-black-700" : ""
              } flex flex-col items-center m-1 justify-center relative`} >
            Quem Somos
            {location.pathname === "/quemsomos" ? (
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

          <Link
            to="/apoiar" onClick={() => window.location.href = "/apoiar"}
            className={`${location.pathname === "/apoiar" ? "text-black-700" : ""
              } flex flex-col items-center m-1 justify-center relative`}>
            Apoiar
            {location.pathname === "/apoiar" ? (
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

          <Link
            to="/servicos" onClick={() => window.location.href = "/servicos"}
            className={`${location.pathname === "/servicos" ? "text-black-700" : ""
              } flex flex-col items-center m-1 justify-center relative`}>
            Serviços
            {location.pathname === "/servicos" ? (
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

          <Link
            to="/atividades" onClick={() => window.location.href = "/atividades"}
            className={`${location.pathname === "/atividades" ? "text-black-700" : ""
              } flex flex-col items-center m-1 justify-center relative`}>
            Atividades
            {location.pathname === "/atividades" ? (
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

          <Link
            to="/projetos" onClick={() => window.location.href = "/projetos"}
            className={`${location.pathname === "/projetos" ? "text-black-700" : ""
              } flex flex-col items-center m-1 justify-center relative`}>
            Projetos
            {location.pathname === "/projetos" ? (
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

          <Link
            to="/contactos" onClick={() => window.location.href = "/contactos"}
            className={`${location.pathname === "/contactos" ? "text-black-700" : ""
              } flex flex-col items-center m-1 justify-center relative`}>
            Contactos
            {location.pathname === "/contactos" ? (
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

          <Link
            to="/necessidades" onClick={() => window.location.href = "/necessidades"}
            className={`${location.pathname === "/necessidades" ? "text-black-700" : ""
              } flex flex-col items-center m-1 justify-center relative`}>
            Nessesidades Especiais
            {location.pathname === "/necessidades" ? (
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -bottom-2" />
            ) : (
              ""
            )}
          </Link>

        </div>
      </nav>
      </header>
      <Outlet />
    </>
  );
}
