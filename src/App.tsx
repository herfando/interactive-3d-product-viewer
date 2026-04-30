import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        {/* 3D Object */}
        <Box />

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
