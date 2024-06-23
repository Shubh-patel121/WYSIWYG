import React, { useContext } from "react";
import { AppSidebarContext } from "../pages/page";
import previewIcon from "../asset/icon_prev.png";
import editIcon from "../asset/icon_edit.jpg";

const AppHeader = () => {
  const { mode, handleModeChange } = useContext(AppSidebarContext);

  return (
    <header className="app-header">
      <div>
        <span className="wysiwyg"> What You See - Is - What You Get</span>
      </div>
      <div>
        <img
          src={mode === "edit" ? previewIcon : editIcon}
          alt={
            mode === "edit" ? "Switch to Preview Mode" : "Switch to Edit Mode"
          }
          className="prev-btn"
          onClick={handleModeChange}
        />
      </div>
    </header>
  );
};

export default AppHeader;
