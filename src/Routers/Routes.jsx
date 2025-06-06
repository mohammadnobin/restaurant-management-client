import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
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
        path: '/details',
        element: <PrivateRoute><DetailsPage /></PrivateRoute>
      }
    ],
},
{
  path: '/signup',
  element: <SignUpPage />
},
{
  path: '/signin',
  element: <SignInPage/>
},
  {
    path: '*',
    element: <ErrorPage />
  }
]);
