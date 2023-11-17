const startResizeHandler = (setImageSize) => {
  const handleResize = () => {
    const image = document.getElementById("hotspotImage");
    if (image) {
      const rect = image.getBoundingClientRect();
      setImageSize({ width: rect.width, height: rect.height });
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return handleResize; // Return the handleResize function for cleanup
};

const stopResizeHandler = (handleResize) => {
  window.removeEventListener("resize", handleResize);
};

export { startResizeHandler, stopResizeHandler };
