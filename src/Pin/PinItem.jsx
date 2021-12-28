import React from "react";

const defaultStyle = {
  width: "2rem",
  height: "2rem",
  borderRadius: "0.25rem",
  padding: "0.5rem 0.25rem"
};

const PinItem = React.forwardRef(({ length, handleChange }, ref) => {
  return (
    <div>
      <input
        ref={ref}
        maxLength={length}
        style={defaultStyle}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
});

export default PinItem;
