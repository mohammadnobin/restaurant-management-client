import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import GalleryPage from "../pages/Gallery/galleryPage";
import AllFoodsPage from "../pages/AllFoodsPage/AllFoodsPage";
import AddFoodPage from "../pages/AddFoodPage/AddFoodPage";
import MyFoodsPage from "../pages/MyFoodsPage/MyFoodsPage";
import MyOrdersPage from "../pages/MyOrdersPage/MyOrdersPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

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
        loader:()=> fetch(`${import.meta.env.VITE_API_URL}/all_foods`),
        hydrateFallbackElement:<h2>this is loading</h2>,
        element: <AllFoodsPage />,
      },
      {
        path: '/single_food/:id',
        element: <DetailsPage />
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/add_food",
        element: (
          <PrivateRoute>
            <AddFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_foods",
        element: (
          <PrivateRoute>
            <MyFoodsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_orders",
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
