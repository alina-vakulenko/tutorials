import React, { useState, useEffect } from "react";

const ToggleData = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  const onClick = () => setToggle((prev) => !prev);

  return (
    <>
      <h1>{value}</h1>
      {toggle && <div>toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello world</h1>
      <button onClick={onClick}>Click me</button>
      <input
        type="text"
        placeholder="Input value"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default ToggleData;
