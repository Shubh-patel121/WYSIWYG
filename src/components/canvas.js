import React, { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { renderComponent } from "../utils/utils-function";
import { AppSidebarContext } from "../pages/page";


const Canvas = () => {
  const [components, setComponents] = useState([]);
  const { backgroundColor } = useContext(AppSidebarContext);
  const addComponent = (type, left, top) => {
    setComponents([
      ...components,
      { id: Math.floor(Math.random().toString() * 100), type, left, top },
    ]);
  };

  const removeComponent = (id) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const [{ isOver }, drop] = useDrop({
    accept: "component",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const left = offset.x - 400; // Adjusting for sidebar width
      const top = offset.y -100;
      addComponent(item.type, left, top);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={components.length === 0 ? "empty-canvas" : "canvas"}
      style={{ backgroundColor }}
    >
      {components.map((component) => {
        const props = {
          key: component.id,
          left: component.left,
          top: component.top,
          remove: removeComponent,
          id: component.id,
        //   mode,
        };
        return (
          <div
            key={component.id}
            className="relative inline-block"
            style={{ left: component.left, top: component.top }}
          >
            {renderComponent(component.type, props)}
          </div>
        );
      })}
      {components.length === 0 && (
        <div className="canvas-alert">
          Let's start building your page by Dragging components from sidebar{" "}
        </div>
      )}
    </div>
  );
};

export default Canvas;
