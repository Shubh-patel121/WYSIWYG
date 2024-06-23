import React ,{useContext, useState } from "react";
import Button from "../reusable/button";
import { AppSidebarContext } from "../../pages/page";

const ParagraphComponent = ({id, left, top, remove}) => {
    const [text, setText] = useState('Hey, Lets Click me and add your paragraph here !');
    const { mode } = useContext(AppSidebarContext);

    return (
      <div className="component-wrapper" style={{ left, top }}>
        {mode === 'edit' ? (
          <div>
          <Button handleClick={remove} id={id}/>
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setText(e.currentTarget.innerText)}
            className="paragraph-component"
          >
            {text}
          </p>
          </div>
        ) : (
          <p className="paragraph-component">{text}</p>
        )}
      </div>
    );
  };
  
  export default ParagraphComponent;
  