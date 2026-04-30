import Scene from "../components/Scene";

export default function Home() {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      {/* 3D */}
      <div style={{ flex: 1 }}>
        <Scene />
      </div>

      {/* UI Panel */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          background: "#111",
          color: "#fff",
        }}
      >
        <h2>Product Name</h2>
        <p>Interactive 3D product viewer</p>
      </div>
    </div>
  );
}
