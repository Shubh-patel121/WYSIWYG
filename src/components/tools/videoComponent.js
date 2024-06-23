import React, { useContext, useState } from "react";
import Button from "../reusable/button";
import { AppSidebarContext } from "../../pages/page";

const VideoComponent = ({ id, left, top, remove }) => {
  const [src, setSrc] = useState("");
  const { mode } = useContext(AppSidebarContext);

  const handleVideoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="component-wrapper" style={{ left, top }}>
      {mode !== "edit" && src ? (
        <video src={src} controls className="video-component" />
      ) : (
        mode === "edit" && (
          <div>
            <Button handleClick={remove} id={id} />
            <input
              className="file-input"
              type="file"
              placeholder="Hey, Lets Click me and add upload your videos !"
              onChange={handleVideoUpload}
            />
          </div>
        )
      )}
    </div>
  );
};

export default VideoComponent;
