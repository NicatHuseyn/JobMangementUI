import styles from "./index.module.scss";

import { useFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToasterComponent from "../../../Components/ToastComponent";
import {
  createData,
  endpoints,
  updateData,
} from "../../../Services/httpClientServer";
import TextArea from "antd/es/input/TextArea";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../../Services/stores/blogsApi";

const UpdateBlog = () => {
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

  // Code for rtk query
  // code for rtk query
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, error, isLoading } = useGetBlogByIdQuery(id);

  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (data) {
      setTitle(data.data.title);
      setText(data.data.text);
      setImage(data.data.image);
    }
  }, [data]);

  const handleChangeData = (e) => {
    e.preventDefault();
  };

  const handleUpdate = () => {
    const newData = {
      id: id,
      title: title,
      text: text,
      image: image,
    };
    updateData(endpoints.blogs, newData).then((res) => {
      toast.success(res.data.data.message);
      navigate("/blog-list");
    });
  };
  // code for rtk query
  // Code for rtk query

  return (
    <section>
      <ToasterComponent />
      <h1>Update Blog</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <div>
              <label htmlFor="title">Blog Title</label>
              <Input
                id="title"
                name="title"
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
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
                onChange={(e) => {
                  setText(e.target.value);
                }}
                value={text}
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
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                value={image}
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

export default UpdateBlog;
