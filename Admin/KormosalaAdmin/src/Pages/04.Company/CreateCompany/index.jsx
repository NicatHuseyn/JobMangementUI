import React from "react";
import { useFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToasterComponent from "../../../Components/ToastComponent";
import { createData, endpoints } from "../../../Services/httpClientServer";
import RichText from "../../../Components/RichTextComponent";
import styles from "./index.module.scss";
import TextArea from "antd/es/input/TextArea";

const CreateCompany = () => {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    icon: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(3, "Too Short!")
      .max(1000, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    webSiteUrl: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      icon: "",
      description: "",
      phoneNumber: "",
      webSiteUrl: "",
      email: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      createData(endpoints.companies, values).then((res) => {
        if (res.data.data.success) {
          toast.success(res.data.data.message);
        } else {
          toast.error(res.data.data.message);
        }
      });
      resetForm();
    },
  });


  return (
    <section>
      <ToasterComponent />
      <h1>Create Company</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Company Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                placeholder="Enter Company Name"
              />
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="icon">Company Icon</label>
              <Input
                id="icon"
                name="icon"
                type="text"
                onChange={handleChange}
                value={values.icon}
                placeholder="Enter Company Icon"
              />
              {errors.icon && touched.icon && (
                <div className="error">{errors.icon}</div>
              )}
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <TextArea
                id="description"
                name="description"
                type="text"
                onChange={handleChange}
                value={values.description}
                placeholder="Enter Company Description"
              />
              {errors.description && touched.description && (
                <div className="error">{errors.description}</div>
              )}
              {/* <RichText name="description"  value={values.description} onChange={handleChange} />
              {errors.description && touched.description && (
                <div className="error">{errors.description}</div>
              )} */}
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={handleChange}
                value={values.phoneNumber}
                placeholder="Enter Phone Number"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div className="error">{errors.phoneNumber}</div>
              )}
            </div>

            <div>
              <label htmlFor="webSiteUrl">Website URL</label>
              <Input
                id="webSiteUrl"
                name="webSiteUrl"
                type="text"
                onChange={handleChange}
                value={values.webSiteUrl}
                placeholder="Enter Website URL"
              />
              {errors.webSiteUrl && touched.webSiteUrl && (
                <div className="error">{errors.webSiteUrl}</div>
              )}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Enter Email"
              />
              {errors.email && touched.email && (
                <div className="error">{errors.email}</div>
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

export default CreateCompany;
