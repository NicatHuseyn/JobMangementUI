import toast from "react-hot-toast";
import styles from "./index.module.scss";
import ToasterComponent from "../../../Components/ToastComponent";
import { endpoints, updateData } from "../../../Services/httpClientServer";
import * as Yup from "yup";
import { Button, Input } from "antd";
import { useFormik } from "formik";
import { useState } from "react";

const UpdateIndustry = () => {

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  // Code for yup

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <section>
      <ToasterComponent />
      <h1>Update Industry</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Industry Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                placeholder="Enter Industry Name"
              />
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
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

export default UpdateIndustry;
