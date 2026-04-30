import Scene from "../components/Scene";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 3D */}
      <div style={{ flex: 1 }}>
        <Scene />
      </div>

      {/* UI PANEL */}
      <div style={{ width: 320, padding: 20 }}>
        <h1>Lamborghini Countach</h1>
        <p>2021 LPI 800-4</p>

        <button>Reset View</button>
        <button>Toggle Rotate</button>
      </div>
    </div>
  );
}
