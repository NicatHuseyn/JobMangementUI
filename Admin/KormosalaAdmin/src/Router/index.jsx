import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Pages/01.AdminLayout";
import Dashboard from "../Pages/01.DashboardPage";
import CreateIndustry from "../Pages/02.IndustryPage/CreateIndustry";
import UpdateIndustry from "../Pages/02.IndustryPage/UpdateIndustry";
import Industry from "../Pages/02.IndustryPage/IndustryList";
import CategoryList from "../Pages/03.Category/CategoryList";
import CreateCategory from "../Pages/03.Category/CreateCategory";
import UpdateCategory from "../Pages/03.Category/UpdateCategory";
import CompanyList from "../Pages/04.Company/CompanyList";
import CreateCompany from "../Pages/04.Company/CreateCompany";
import UpdateCompany from "../Pages/04.Company/UpdateCompany/UpdateCompany";
import BlogList from "../Pages/05.Blog/BlogList";
import CreateBlog from "../Pages/05.Blog/CreateBlog";
import UpdateBlog from "../Pages/05.Blog/UpdateBlog";
import JobList from "../Pages/06.Job/JobList";
import CreateJob from "../Pages/06.Job/CreateJob";
import UpdateJob from "../Pages/06.Job/UpdateJob";
import CreateLocation from "../Pages/07.Location/CreateLocation";

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
        path: "industry-list",
        element: <Industry />,
      },
      {
        path: "/create-industry",
        element: <CreateIndustry />,
      },
      {
        path: "update-industries",
        element: <UpdateIndustry />,
      },
      {
        path: "category-list",
        element: <CategoryList />,
      },
      {
        path: "create-category",
        element: <CreateCategory />,
      },
      {
        path: "update-categories",
        element: <UpdateCategory />,
      },
      {
        path: "company-list",
        element: <CompanyList />,
      },
      {
        path: "create-company",
        element: <CreateCompany />,
      },
      {
        path: "update-companies",
        element: <UpdateCompany />,
      },
      {
        path: "blog-list",
        element: <BlogList />,
      },
      {
        path: "create-blog",
        element: <CreateBlog />,
      },
      {
        path: "update-blogs",
        element: <UpdateBlog />,
      },
      {
        path: "job-list",
        element: <JobList />,
      },
      {
        path: "create-job",
        element: <CreateJob />,
      },
      {
        path: "update-jobs",
        element: <UpdateJob />,
      },
      {
        path: "create-locations",
        element: <CreateLocation />,
      },
    ],
  },
]);
