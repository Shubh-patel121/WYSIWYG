import React from "react";
import DndContext from "./components/reusable/dndContext";
import "./app.css";
import Page from "./pages/page";

const App = () => {
  return (
    <DndContext>
      <Page />
    </DndContext>
  );
};

export default App;
