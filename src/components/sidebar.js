import React, { useContext } from "react";
import Toolbar from "./toolbar";
import Footer from "./footer";
import { AppSidebarContext } from "../pages/page";

const Sidebar = () => {
  const { backgroundColor, setBackgroundColor } = useContext(AppSidebarContext);

  return (
    <div className="sidebar">
      <Toolbar />
      <div className="controls">
        <label>Background Color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="color-picker"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Sidebar;
