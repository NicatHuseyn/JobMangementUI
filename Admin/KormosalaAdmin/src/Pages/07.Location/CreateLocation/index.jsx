import styles from "./index.module.scss";

import { useFormik } from "formik";
import { Input, Button, Select } from "antd";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToasterComponent from "../../../Components/ToastComponent";
import { createData, endpoints } from "../../../Services/httpClientServer";

const CreateLocation = () => {
  // Code for yup
  const ValidationSchema = Yup.object().shape({
    addressName: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });
  // Code for yup

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      addressName: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      createData(endpoints.locations, values).then((res) => {
        if (res.data.data.success) {
          toast.success(res.data.data.message);
        } else {
          toast.error(res.data.data.message);
        }
      });
      resetForm();
    },
  });

  // Code for selection
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  // Code for selection

  return (
    <section>
      <ToasterComponent />
      <h1>Create Address</h1>
      <div className={styles["inner"]}>
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="company-name">Companies</label>
              <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
              {errors.addressName && touched.addressName && (
                <div className="error">{errors.addressName}</div>
              )}
            </div>
            <div>
              <label htmlFor="addressName">Address</label>
              <Input
                id="addressName"
                name="addressName"
                type="text"
                onChange={handleChange}
                value={values.addressName}
                placeholder="Enter Address"
              />
              {errors.addressName && touched.addressName && (
                <div className="error">{errors.addressName}</div>
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

export default CreateLocation;
