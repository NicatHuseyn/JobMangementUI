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
  updateData,
} from "../../../Services/httpClientServer";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../../../Services/stores/jobsApi";

const UpdateJob = () => {
  const { Option } = Select;
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
        experience: 0,
        jobType: "",
        categoryId: null,
        companyId: null,
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
    getAllData(endpoints.jobs)
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

  // code rtk query
  // code for rtk query
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, error, isLoading } = useGetJobByIdQuery(id);

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [salary, setSalary] = useState(null);
  const [experience, setExperience] = useState(null);
  const [jobType, setJobType] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [companyId, setCompanyId] = useState(null);

  useEffect(() => {
    if (data) {
      setName(data.data.name);
      setDescription(data.data.description);
      setSalary(data.data.salary);
      setExperience(data.data.experience);
      setJobType(data.data.jobType);
      setCategoryId(data.data.categoryId);
      setCompanyId(data.data.companyId);
    }
  }, [data]);

  const handleChangeData = (e) => {
    e.preventDefault();
  };

  const handleUpdate = () => {
    const newData = {
      id: id,
      name: name,
      description: description,
      salary: salary,
      experience: experience,
      jobType: jobType,
      categoryId: categoryId,
      companyId: companyId,
    };
    updateData(endpoints.jobs, newData).then((res) => {
      toast.success(res.data.data.message);
      navigate("/job-list");
    });
  };
  // code for rtk query
  // code rtk query

  return (
    <section>
      <ToasterComponent />
      <h1>Create Job</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <div>
              <label htmlFor="name">Job Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
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
                onChange={(e) => {
                  setJobType(e.target.value);
                }}
                value={jobType}
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
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
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
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                value={salary}
                placeholder="Enter Job Salary"
              />
              {errors.salary && touched.salary && (
                <div className="error">{errors.salary}</div>
              )}
            </div>

            <div>
              <label htmlFor="experience">Experience</label>
              <Input
                id="experience"
                name="experience"
                type="number"
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
                value={experience}
                placeholder="Enter Job Experience"
              />
              {errors.experience && touched.experience && (
                <div className="error">{errors.experience}</div>
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
                value={categoryId}
                onChange={(value) => {
                  setCategoryId(value);
                  setFieldValue("categoryId", value);
                }}
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
                value={companyId}
                onChange={(value) => {
                  setCompanyId(value);
                  setFieldValue("companyId", value);
                }}
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

export default UpdateJob;
