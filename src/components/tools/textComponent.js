import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../reusable/button";
import { AppSidebarContext } from "../../pages/page";

const TextComponent = ({ id, left, top, remove }) => {
  const [text, setText] = useState(
    "Hey, Lets Click me and add your text here !"
  );
  const { mode } = useContext(AppSidebarContext);
  return (
    <div className="component-wrapper" style={{ left, top }}>
      {mode === "edit" ? (
        <div>
          <Button handleClick={remove} id={id} />
          <ReactQuill
            value={text}
            onChange={setText}
            className="text-component"
          />
        </div>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="text-component"
        />
      )}
    </div>
  );
};

export default TextComponent;
