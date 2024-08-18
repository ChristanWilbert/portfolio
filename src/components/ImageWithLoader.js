import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ImageWithLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
    img.onerror = () => {
      console.error("Failed to load image:", src);
      setLoading(false); // Handle error state as needed
    };
  }, [src]);

  return (
    <div className="relative object-contain w-full md:w-[30%] h-[40vh] md:h-[50vh]">
      {loading && (
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <div
        className={`bg-center rounded-3xl bg-contain bg-no-repeat transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${src})`,
          height: "100%",
          width: "100%",
          borderRadius: 12,
        }}
      />
    </div>
  );
};

export default ImageWithLoader;
