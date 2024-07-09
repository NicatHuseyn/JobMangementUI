import styles from "./index.module.scss";

import { useFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToasterComponent from "../../../Components/ToastComponent";
import { endpoints, updateData } from "../../../Services/httpClientServer";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../../Services/stores/categoriesApi";

const UpdateCategory = () => {
  // Code for yup
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });
  // Code for yup

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  // code for rtk query
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, error, isLoading } = useGetCategoryByIdQuery(id);

  const [item, setItem] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    if (data) {
      setItem(data.data.name);
      setDescription(data.data.description);
    }
  }, [data]);

  const handleChangeData = (e) => {
    e.preventDefault();
  };

  const handleUpdate = () => {
    const newData = {
      id: id,
      name: item,
      description: description,
    };
    updateData(endpoints.categories, newData).then((res) => {
      toast.success(res.data.data.message);
      navigate("/category-list");
    });
  };
  // code for rtk query

  return (
    <section>
      <ToasterComponent />
      <h1>Update Category</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <div>
              <label htmlFor="name">Category Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={(e) => {
                  setItem(e.target.value);
                }}
                value={item}
                placeholder="Enter Category Name"
              />
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="description">Category Description</label>
              <TextArea
                id="description"
                name="description"
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                placeholder="Enter Category Description"
              />
              {errors.description && touched.description && (
                <div className="error">{errors.description}</div>
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

export default UpdateCategory;
