import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page_404 from "../pages/Page_404";
import type { RouteApp } from "../types/layout";

export default function AppRoutes() {

    const RUTAS: RouteApp[] = [
        { path: "/", element: <Home /> },
        { path: "*", element: <Page_404 /> }
    ];

    return (
        <Router>
            <Routes>
                {RUTAS.map(ruta => <Route key={ruta.path} path={ruta.path} element={ruta.element} />)}
            </Routes>
        </Router>
    );
}