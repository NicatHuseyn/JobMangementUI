import styles from "./index.module.scss";

import { useFormik } from "formik";
import { Input, Button, Select } from "antd";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToasterComponent from "../../../Components/ToastComponent";
import {
  createData,
  endpoints,
  getAllData,
} from "../../../Services/httpClientServer";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";

const { Option } = Select;

const CreateJob = () => {
  // Code for yup
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),

    description: Yup.string()
      .min(5, "Too Short!")
      .max(10000, "Too Long!")
      .required("Required"),

    salary: Yup.number().min(0, "Salary must be positive").required("Required"),
    exprience: Yup.number()
      .min(0, "Exprience must be positive")
      .required("Required"),
    jobType: Yup.string()
      .min(5, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    categoryId: Yup.number()
      .min(1, "Category must be selected")
      .required("Required"),
    companyId: Yup.number()
      .min(0, "Company must be selected")
      .required("Required"),
  });
  // Code for yup

  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        salary: 0,
        exprience: 0,
        jobType: "",
        categoryId: 1,
        companyId: 1
      },
      validationSchema: ValidationSchema,
      onSubmit: (values, { resetForm }) => {
        createData(endpoints.jobs, values).then((res) => {
          if (res.data.data.success) {
            toast.success(res.data.data.message);
          } else {
            toast.error(res.data.data.message);
          }
        });
        resetForm();
      },
    });

  // Fetch categories
  const [allCategories, setAllCategories] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    getAllData(endpoints.categories)
      .then((res) => {
        console.log(res.data);
        setAllCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getAllData(endpoints.companies)
      .then((res) => {
        console.log(res.data);
        setAllCompanies(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section>
      <ToasterComponent />
      <h1>Create Job</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Job Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                placeholder="Enter Job Name"
              />
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="jobType">Job Type</label>
              <Input
                id="jobType"
                name="jobType"
                type="text"
                onChange={handleChange}
                value={values.jobType}
                placeholder="Enter Job Type"
              />
              {errors.jobType && touched.jobType && (
                <div className="error">{errors.jobType}</div>
              )}
            </div>

            <div>
              <label htmlFor="description">Job Description</label>
              <TextArea
                id="description"
                name="description"
                onChange={handleChange}
                value={values.description}
                placeholder="Enter Job Description"
              />
              {errors.description && touched.description && (
                <div className="error">{errors.description}</div>
              )}
            </div>

            <div>
              <label htmlFor="salary">Salary</label>
              <Input
                id="salary"
                name="salary"
                type="number"
                onChange={handleChange}
                value={values.salary}
                placeholder="Enter Job Salary"
              />
              {errors.salary && touched.salary && (
                <div className="error">{errors.salary}</div>
              )}
            </div>

            <div>
              <label htmlFor="exprience">Exprience</label>
              <Input
                id="exprience"
                name="exprience"
                type="number"
                onChange={handleChange}
                value={values.exprience}
                placeholder="Enter Job Exprience"
              />
              {errors.exprience && touched.exprience && (
                <div className="error">{errors.exprience}</div>
              )}
            </div>

            <div>
              <label htmlFor="categoryId">Category</label>
              <Select
               style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
                id="categoryId"
                name="categoryId"
                value={values.categoryId}
                onChange={(value) => setFieldValue("categoryId", value)}
                placeholder="Select Category"
              >
                 <Option></Option>
                {allCategories.map((category) => (
                  <Option key={category.id} value={category.id}>
                    {category.name}
                  </Option>
                ))}
              </Select>
              {errors.categoryId && touched.categoryId && (
                <div className="error">{errors.categoryId}</div>
              )}
            </div>

            <div>
              <label htmlFor="categoryId">Companies</label>
              <Select
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                id="companyId"
                name="companyId"
                value={values.companyId}
                onChange={(value) => setFieldValue("companyId", value)}
                placeholder="Select Company"
              >
                <Option></Option>
                {allCompanies.map((company) => (
                  <Option key={company.id} value={company.id}>
                    {company.name}
                  </Option>
                ))}
              </Select>
              {errors.companyId && touched.companyId && (
                <div className="error">{errors.companyId}</div>
              )}
            </div>

            <div>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateJob;
