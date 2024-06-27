import styles from "./index.module.scss";

import { useFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToasterComponent from "../../../Components/ToastComponent";
import { createData, endpoints } from "../../../Services/httpClientServer";

const CreateCategory = () => {
  // Code for yup
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });
  // Code for yup

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      createData(endpoints.categories, values).then((res) => {
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
      <h1>Create Category</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Category Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                placeholder="Enter Category Name"
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

export default CreateCategory;
