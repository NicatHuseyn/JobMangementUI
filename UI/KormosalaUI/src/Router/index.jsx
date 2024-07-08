import { createBrowserRouter } from "react-router-dom";
import UILayout from "../Pages";
import HomePage from "../Pages/HomePage";
import JobPage from "../Pages/JobPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UILayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "jobs",
        element: <JobPage />,
      },
    ],
  },
]);
