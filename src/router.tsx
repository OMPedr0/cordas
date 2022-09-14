/* libs*/
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

/* constants */
import { RoutesAll } from "./constants/routesConfig";


/* components */
import { Header } from "./components/Home/Header";

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<Header />}>
          {RoutesAll.map(({ path, Component }) => (
            <Route
              path={path}
              key={path}
              element={<Component />}
            />
          ))}
        </Route>
      </Routes>
    );
  }
  