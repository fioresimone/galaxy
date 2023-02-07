import { Float, PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <Float floatIntensity={0.01} rotationIntensity={0.1}>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 2]}
        fov={45}
        near={0.1}
        far={200}
      ></PerspectiveCamera>
    </Float>
  );
}
