import React from "react";
import { useDrag } from 'react-dnd';

const ToolbarItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "component",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`toolbar-item ${isDragging ? "dragging" : ""}`}>
      {label}
    </div>
  );
};

export default ToolbarItem;
