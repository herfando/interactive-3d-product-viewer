import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
