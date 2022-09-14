import React from "react";


const Apoiar = React.lazy(() => 
    import("../pages/Apoiar").then(({ Apoiar }) => ({ default: Apoiar }))
)

const Atividades = React.lazy(() => 
    import("../pages/Atividades").then(({ Atividades }) => ({ default: Atividades }))
)

const Contactos = React.lazy(() => 
    import("../pages/Contactos").then(({ Contactos }) => ({ default:  Contactos }))
)

const Dashboard = React.lazy(() => 
    import("../pages/Dashboard").then(({ Dashboard }) => ({ default: Dashboard }))
)

const Home = React.lazy(() => 
    import("../pages/Home").then(({ Home }) => ({ default: Home }))
)

const Necessidades = React.lazy(() => 
    import("../pages/Necessidades").then(({ Necessidades }) => ({ default: Necessidades }))
)

const Projetos = React.lazy(() => 
    import("../pages/Projetos").then(({  Projetos }) => ({ default: Projetos }))
)

const QuemSomos = React.lazy(() => 
    import("../pages/QuemSomos").then(({ QuemSomos }) => ({ default: QuemSomos }))
)

const Servicos = React.lazy(() => 
    import("../pages/Servicos").then(({ Servicos }) => ({ default: Servicos }))
)


export const RoutesAll = [
    {
      title: "Apoiar",
      path: "/apoiar",
      Component: () => <Apoiar />,
      isRouteVisible: true,
    },
    {
      title: "Atividades",
      path: "/atividades",
      Component: () => <Atividades />,
      isRouteVisible: true,
    },
    {
      title: "Contactos",
      path: "/contactos",
      Component: () => <Contactos />,
      isRouteVisible: true,
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      Component: () => <Dashboard />,
      isRouteVisible: true,
    },
    {
      title: "Home",
      path: "/",
      Component: () => <Home />,
      isRouteVisible: true,
    },
    {
      title: "Necessidades",
      path: "/necessidades",
      Component: () => <Necessidades />,
      isRouteVisible: true,
    },
    {
      title: "Projetos",
      path: "/projetos",
      Component: () => <Projetos />,
      isRouteVisible: true,
    },
    {
      title: "Quem Somos",
      path: "/quemsomos",
      Component: () => <QuemSomos />,
      isRouteVisible: true,
    },
    {
      title: "Servicos",
      path: "/servicos",
      Component: () => <Servicos />,
      isRouteVisible: true,
    },
  ];