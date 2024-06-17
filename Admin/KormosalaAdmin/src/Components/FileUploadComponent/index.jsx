import React from "react";
import { Input } from "antd";

const FileInput = ({
  id,
  name,
  onChange,
  value,
  error,
  touched,
  label,
  accept,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        type="file"
        name={name}
        onChange={onChange}
        value={value}
        accept={accept}
      />
    </div>
  );
};

export default FileInput;
