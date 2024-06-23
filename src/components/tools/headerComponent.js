import React, { useContext, useState } from "react";
import Button from "../reusable/button";
import { AppSidebarContext } from "../../pages/page";

const HeaderComponent = ({ id, left, top, remove }) => {
  const [text, setText] = useState("Hey , Enter your header text here !");
  const { mode } = useContext(AppSidebarContext);
  return (
    <div className="component-wrapper" style={{ left, top }}>
      {mode === "edit" ? (
        <div>
          <Button handleClick={remove} id={id} />
          <h1
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setText(e.currentTarget.innerText)}
            className="header-component"
          >
            {text}
          </h1>
        </div>
      ) : (
        <h1 className="header-component">{text}</h1>
      )}
    </div>
  );
};

export default HeaderComponent;
