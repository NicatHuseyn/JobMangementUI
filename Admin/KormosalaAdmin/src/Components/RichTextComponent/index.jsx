import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RichText = ({ onChange, value, name }) => {

  const stripHtml = (html) => {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handleChange = (event, editor) => {
    const data = editor.getData();
    const plainText = stripHtml(data);
    onChange(plainText); // onChange prop'unu çağırarak text'i iletin
    console.log({ event, editor, data, plainText });
  };

  return (
    <section style={{ width: "100%", height: "100px" }}>
      <CKEditor
      name= {name}
      value = {value}
        editor={ClassicEditor}
        data="Enter Description"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={handleChange}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </section>
  );
};

export default RichText;
