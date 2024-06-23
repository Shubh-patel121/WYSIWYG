import React from "react";
import { toolbarItems } from "../utils/constant";
import ToolbarItem from "./reusable/toolbarItem";

const Toolbar = () => {
  return (
    <div className="toolbar">
      {toolbarItems.map((item) => (
        <ToolbarItem key={item.type} type={item.type} label={item.label} />
      ))}
    </div>
  );
};

export default Toolbar;
