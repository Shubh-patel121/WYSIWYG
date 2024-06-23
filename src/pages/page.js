import React, { createContext, useState } from "react";
import Sidebar from "../components/sidebar";
import AppHeader from "../components/appHeader";
import Canvas from "../components/canvas";

export const AppSidebarContext = createContext(null);
const Provider = AppSidebarContext.Provider;

const Page = () => {
  const [mode, setMode] = useState("edit");
  const [backgroundColor, setBackgroundColor] = useState("gray");

  const handleModeChange = () => setMode(mode === "edit" ? "preview" : "edit");

  return (
    <div className="app-container">
      <Provider
        value={{ mode, handleModeChange, backgroundColor, setBackgroundColor }}
      >
        <Sidebar />
        <div className="canvas-container">
          <AppHeader />
          <Canvas />
        </div>
      </Provider>
    </div>
  );
};

export default Page;
