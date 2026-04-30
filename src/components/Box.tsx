import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box() {
  const ref = useRef<any>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
