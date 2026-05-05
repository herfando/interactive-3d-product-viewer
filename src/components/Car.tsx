import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Car({ color }: any) {
  const { scene } = useGLTF("/models/lambo.glb");

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        // ❗ cuma ubah body, bukan semua part
        if (
          child.name.toLowerCase().includes("body") ||
          child.name.toLowerCase().includes("car")
        ) {
          child.material = child.material.clone();
          child.material.color.set(color);

          // optional: hilangkan texture supaya warna kelihatan
          if (child.material.map) {
            child.material.map = null;
          }
        }
      }
    });
  }, [color, scene]);

  return <primitive object={scene} scale={1.6} position={[0, -1, 0]} />;
}
