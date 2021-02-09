import { useState } from "react";

const COLOR_PREFIX = "--color-background-page-primary";
const SHADE_OFFSET = 10;

function App() {
  const [value, setValue] = useState(10);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: "100vh",
    overflow: "hidden",
    background: `var(${COLOR_PREFIX}-${value})`,
    color: value < 80 ? 'white' : 'black',
  };

  return (
    <div style={style}>
      <label htmlFor="primary_shades">Primary: {value}</label>
      <input
        id="primary_shades"
        min="10"
        max="100"
        name="primary shades"
        onChange={e => {
          setValue(e.target.value);
        }}
        step={SHADE_OFFSET}
        style={{ marginTop: 30 }}
        type="range"
        value={value}
      />
    </div>
  );
}

export default App;
