import { useGLTF } from "@react-three/drei";

export default function Car() {
  const { scene } = useGLTF("/models/lambo.glb");

  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}
