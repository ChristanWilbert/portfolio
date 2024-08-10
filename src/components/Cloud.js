import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siMongodb,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siAmazonwebservices,
  siGooglecloud,
  siMysql,
  siNodedotjs,
  siNodered,
  siFlutter,
  siPython,
  siJavascript,
  siOpenjdk,
  siGit,
  siGithub,
  siMqtt,
} from "simple-icons/icons";

const icons = [
  siMongodb,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siAmazonwebservices,
  siGooglecloud,
  siMysql,
  siNodedotjs,
  siNodered,
  siFlutter,
  siPython,
  siJavascript,
  siOpenjdk,
  siGit,
  siGithub,
  siMqtt,
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 80,
    aProps: {
      onClick: (e) => e.preventDefault(),
      onFocus: (e) => e.preventDefault(),
      style: {
        transition: "none",
        transform: "scale(1)",
      },
    },
  });
});

export const StaticCloud = () => {
  return (
    <div className="bg-[url('/src/assets/images/bg22.jpg')] bg-cover rounded-full bg-opacity-100">
      {" "}
      <Cloud options={{ wheelZoom: false }}>{icons}</Cloud>
    </div>
  );
};
