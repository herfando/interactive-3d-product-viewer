import { useState } from "react";
import Scene from "../components/Scene";
import UI from "../components/UI";

export default function Home() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [color, setColor] = useState("red");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <Scene autoRotate={autoRotate} color={color} />
      </div>

      <UI
        autoRotate={autoRotate}
        setAutoRotate={setAutoRotate}
        setColor={setColor}
      />
    </div>
  );
}
