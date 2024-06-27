import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RichText = () => {
  const [text, setText] = useState(null);

  console.log(text);

  return (
    <section>
      <CKEditor
        editor={ClassicEditor}
        data="Enter Description"
        onReady={(editor) => {
          // Editor is ready to use
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
          console.log({ event, editor, data });
        }}
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
