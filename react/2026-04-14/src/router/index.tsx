import {createBrowserRouter, Navigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import ProductPage from "../pages/ProductPage.tsx";

const isAuthenticated = () => Boolean(localStorage.getItem('accessToken'))

function ProtectedRoute() {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />
    }

    return <HomePage />
}

const router = createBrowserRouter([
    {
        path: "/login",
        element: isAuthenticated() ? <Navigate to="/" replace /> : <LoginPage />
    },
    {
        path: "/",
        element: ProtectedRoute(),
    },
    {
        path: "/product",
        element: <ProductPage/>
    },
    {
        path: "*",
        element: <Navigate to="/" replace />
    },
]);

export default router