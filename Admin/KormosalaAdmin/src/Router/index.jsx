import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Pages/01.AdminLayout";
import Dashboard from "../Pages/05.DashboardPage";
import Industry from "../Pages/02.IndustryPage";
import Category from "../Pages/03.CategoryPage";
import Company from "../Pages/04.CompanyPage";
import BlogPage from "../Pages/06.BlogPage";
import Job from "../Pages/07.JobPage";
import CreateIndustry from "../Pages/02.IndustryCreate";
import CreateCategory from "../Pages/03.CategoryCreate";
import CreateCompany from "../Pages/04.CompanyCreate";
import CreateBlog from "../Pages/06.BlogCreate";
import CreateJob from "../Pages/07.JobCreate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/industry",
        element: <Industry />,
      },
      {
        path: "/create-industry",
        element: <CreateIndustry />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/create-category",
        element: <CreateCategory />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/create-company",
        element: <CreateCompany />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/create-blog",
        element: <CreateBlog />,
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        path: "/create-job",
        element: <CreateJob />,
      },
    ],
  },
]);
