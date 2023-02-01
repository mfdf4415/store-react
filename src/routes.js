import CategoryProductPage from "./pages/CategoryProductPage";
import HomePage from "./pages/HomePage";

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/category", element: <CategoryProductPage /> },
]

export default routes