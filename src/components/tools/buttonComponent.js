import React, { useContext, useState } from "react";
import Button from "../reusable/button";
import { AppSidebarContext } from "../../pages/page";
import { buttonStyles } from "../../utils/constant";

const ButtonComponent = ({ left, top, remove, id }) => {
  const [text, setText] = useState("Click me");
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("solid");
  const { mode } = useContext(AppSidebarContext);

  return (
    <div className="component-wrapper" style={{ left, top }}>
      {mode === "edit" ? (
        <div className="btn-component-wrapper">
          <Button handleClick={remove} id={id} />
          <div className="btn-wrap">
            <button
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setText(e.currentTarget.innerText)}
              className={`button-component ${buttonStyles[type]}`}
              style={{ backgroundColor: color }}
            >
              {text}
            </button>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="color-picker"
              placeholder="choose color"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="dropdown"
            >
              <option value="solid">Solid</option>
              <option value="outlined">Outlined</option>
              <option value="rounded">Rounded</option>
            </select>
          </div>
        </div>
      ) : (
        <button
          className={`button-component ${buttonStyles[type]}`}
          style={{ backgroundColor: color }}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default ButtonComponent;
