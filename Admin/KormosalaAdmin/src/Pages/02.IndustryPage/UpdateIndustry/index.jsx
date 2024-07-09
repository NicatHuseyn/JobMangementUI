import toast from "react-hot-toast";
import styles from "./index.module.scss";
import ToasterComponent from "../../../Components/ToastComponent";
import { Audio } from "react-loader-spinner";
import {
  endpoints,
  getAllData,
  updateData,
} from "../../../Services/httpClientServer";
import * as Yup from "yup";
import { Button, Input } from "antd";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

// import rtk query
import {
  useGetIndustriesQuery,
  useGetIndustryByIdQuery,
  useUpdateIndustriesMutation,
} from "../../../Services/stores/industriesApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateIndustry = () => {
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
      resetForm();
    },
  });

  // usign rtk query

  const navigate = useNavigate();

  const { id } = useParams();

  const { data, error, isLoading } = useGetIndustryByIdQuery(id);

  const [item, setItem] = useState(null);

  useEffect(() => {
    if (data) {
      setItem(data.data.name);
    }
  }, [data]);

  const handleChangeData = (e) => {
    e.preventDefault();
    setItem(e.target.value);
  };

  const handleUpdate = () => {
    const newData = {
      id: id,
      name: item,
    };
    updateData(endpoints.industries, newData).then((res) => {
      toast.success(res.data.data.message);
      navigate("/industry-list");
    });
  };

  return (
    <>
      {isLoading ? (
        <Audio
          height="80"
          width="100"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <section>
          <ToasterComponent />
          <h1>Update Industry</h1>
          <div className={styles["inner"]}>
            <div className={styles["form"]}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
              >
                <div>
                  <label htmlFor="name">Industry Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e) => {
                      handleChangeData(e);
                    }}
                    value={item}
                    placeholder="Enter Industry Name"
                  />
                  {errors.name && touched.name && (
                    <div className="error">{errors.name}</div>
                  )}
                </div>

                <div>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UpdateIndustry;
