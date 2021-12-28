import { useEffect, useRef, useState } from "react";
import PinItem from "./PinItem";

function PinInput({ noOfBoxes = 4, length = 1, onChange }) {
  const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));
  const arr = new Array(noOfBoxes).fill(0);
  const ref = useRef([]);

  const handleChange = (val, index) => {
    // set the value[i] to new value
    values[index] = val;
    setValues([...values]);
    // move to next input box
    if (val.length === length && index < noOfBoxes - 1) {
      ref.current[index + 1].focus();
    }
    // if onchagne exists invoke onChange and pass the joined value
    onChange && onChange(values.join(""));
  };
  useEffect(() => {
    console.log(ref);
  }, [values]);
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
      }}
    >
      {arr.map((_, i) => (
        // <input key={i} ref={(el) => (ref.current[i] = el)} />
        <PinItem
          key={i}
          ref={(el) => (ref.current[i] = el)}
          handleChange={(v) => handleChange(v, i)}
          length={length}
        />
      ))}
    </div>
  );
}

export default PinInput;
