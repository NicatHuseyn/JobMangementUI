import styles from "./index.module.scss";

import { useFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToasterComponent from "../../../Components/ToastComponent";
import { createData, endpoints } from "../../../Services/httpClientServer";
import TextArea from "antd/es/input/TextArea";

const CreateBlog = () => {
  // Code for yup
  const ValidationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    text: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    image: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });
  // Code for yup

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      title: "",
      text: "",
      image: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      createData(endpoints.blogs, values).then((res) => {
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
      <h1>Create Blog</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Blog Title</label>
              <Input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                value={values.title}
                placeholder="Enter Blog Title"
              />
              {errors.title && touched.title && (
                <div className="error">{errors.title}</div>
              )}
            </div>

            <div>
              <label htmlFor="title">Blog Text</label>
              <TextArea
                id="text"
                name="text"
                type="text"
                onChange={handleChange}
                value={values.text}
                placeholder="Enter Blog Text"
              />
              {errors.text && touched.text && (
                <div className="error">{errors.text}</div>
              )}
            </div>

            <div>
              <label htmlFor="title">Blog Image</label>
              <Input
                id="image"
                name="image"
                type="text"
                onChange={handleChange}
                value={values.image}
                placeholder="Enter Blog Image"
              />
              {errors.image && touched.image && (
                <div className="error">{errors.image}</div>
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

export default CreateBlog;
