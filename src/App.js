import { Fragment, useState } from "react";
import Globe from "./globe";
import Header from "./header";
export default function App() {
  const [selected, setSelected] = useState("all years");
  console.log(selected);
  return (
    <div>
      <Header selected={selected} setSelected={setSelected} />
      <Globe selected={selected} />
    </div>
  );
}
