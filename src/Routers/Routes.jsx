import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllFoodsPage from "../pages/AllFoodsPage/AllFoodsPage";
import AddFoodPage from "../pages/AddFoodPage/AddFoodPage";
import MyFoodsPage from "../pages/MyFoodsPage/MyFoodsPage";
import MyOrdersPage from "../pages/MyOrdersPage/MyOrdersPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import PurchasePage from "../pages/PurchasePage/PurchasePage";
import Loading from "../pages/Shared/Loading";
import FoodUpdatePage from "../pages/FoodUpdatePage/FoodUpdatePage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import FAQPage from "../pages/FAQPage/FAQPage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/all_foods",
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/all_foods`),
        hydrateFallbackElement: <Loading />,
        element: <AllFoodsPage />,
      },
      {
        path: "/single_food/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: <DetailsPage />,
      },
      {
        path: "/purchase/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <PurchasePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update_food/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <FoodUpdatePage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add_food",
        element: (
          <PrivateRoute>
            <AddFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my_foods",
        element: (
          <PrivateRoute>
            <MyFoodsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my_orders",
        element: (
          <PrivateRoute>
            <MyOrdersPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
