import React from "react";
import styles from "./index.module.scss";

import { useFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";

const CreateIndustry = () => {
  // Code for yup
  const ValidationSchema = Yup.object().shape({
    industryName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    industryIcon: Yup.string()
      // .min(2, "Too Short!")
      // .max(50, "Too Long!")
      .required("Required"),
  });
  // Code for yup

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      industryName: "",
      industryIcon: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <section>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="industryName">Industry Name</label>
              <Input
                id="industryName"
                name="industryName"
                type="text"
                onChange={handleChange}
                value={values.industryName}
                placeholder="Enter Industry Name"
              />
              {errors.industryName && touched.industryName && (
                  <div className="error">{errors.industryName}</div>
                )}
            </div>
            <div>
              <label htmlFor="industryIcon">Industry Icon</label>
              <Input
                id="industryIcon"
                name="industryIcon"
                type="file"
                onChange={handleChange}
                value={values.industryIcon}
                accept="image/png, image/jpg"
              />
              {errors.industryIcon && touched.industryIcon && (
                  <div className="error">{errors.industryIcon}</div>
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

export default CreateIndustry;
