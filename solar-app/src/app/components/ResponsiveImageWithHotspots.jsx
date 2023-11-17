'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { startResizeHandler, stopResizeHandler } from "./resizeHandler";

const ResponsiveImageWithHotspots = ({hotspots, imageUrl}) => {
  const router = useRouter();

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = startResizeHandler(setImageSize);

    return () => {
      stopResizeHandler(handleResize);
    };
  }, [startResizeHandler, stopResizeHandler]);

  const handleHotspotClick = (hotspot) => {
    router.push(hotspot.link);
  };

    return (
    <div className="mainImage" style={{ position: "relative", overflow: "hidden" }}>
      <img id="hotspotImage" src={imageUrl} alt="Responsive Image" style={{ width: "100%", height: "auto" }} />

      {hotspots.map((hotspot) => (
        <div
          key={hotspot.id}
          style={{
            position: "absolute",
            left: `${hotspot.x}%`,
            top: `${hotspot.y}%`,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            width: `${(imageSize.width * hotspot.sizePercentage) / 100}px`,
            height: `${(imageSize.width * hotspot.sizePercentage) / 100}px`,
          }}
          onClick={() => handleHotspotClick(hotspot)}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "red",
              cursor: "pointer",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ResponsiveImageWithHotspots;
