import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Car from "./Car";

export default function Scene() {
  return (
    <Canvas camera={{ position: [3, 2, 6] }}>
      {/* LIGHTING BASIC */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />

      {/* CINEMATIC ENV */}
      <Environment preset="city" />

      <Car />

      <OrbitControls enableZoom />
    </Canvas>
  );
}
