import React from "react";
import ButtonComponent from "../components/tools/buttonComponent";
import HeaderComponent from "../components/tools/headerComponent";
import ImageComponent from "../components/tools/imageComponent";
import ParagraphComponent from "../components/tools/paragraphComponent";
import TextComponent from "../components/tools/textComponent";
import VideoComponent from "../components/tools/videoComponent";

export const renderComponent = (type, props) => {
  switch (type) {
    case "text":
      return <TextComponent {...props} />;
    case "image":
      return <ImageComponent {...props} />;
    case "button":
      return <ButtonComponent {...props} />;
    case "header":
      return <HeaderComponent {...props} />;
    case "paragraph":
      return <ParagraphComponent {...props} />;
    case "video":
      return <VideoComponent {...props} />;
    default:
      return null;
  }
};
