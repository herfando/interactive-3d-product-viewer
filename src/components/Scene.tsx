import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stats } from "@react-three/drei";
import { useRef } from "react";
import Car from "./Car";

export default function Scene({ autoRotate }: any) {
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <>
      <Canvas
        camera={{ position: [3, 2, 6] }}
        style={{ background: "#0b0f14" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} />

        <Environment preset="studio" />
        <Stats />
        <Car />

        <OrbitControls
          ref={controlsRef}
          autoRotate={autoRotate}
          autoRotateSpeed={5}
          enableZoom
        />
      </Canvas>

      {/* kita expose function ke UI lewat window (simple version dulu) */}
      <button
        onClick={resetCamera}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
        }}
      >
        Reset Camera
      </button>
    </>
  );
}
