import { FlyControls, OrbitControls } from "@react-three/drei";
import { useActive, useControls } from "../../store";

export default function Controls() {
  const active = useActive((state) => state.active);
  const controls = useControls((state) => state.controls);

  return (
    <>
      {controls && active ? (
        <OrbitControls
          makeDefault
          target={active.coordinates}
          minDistance={1}
          maxDistance={20}
          enablePan={false}
        />
      ) : (
        <FlyControls movementSpeed={3} rollSpeed={0.5} dragToLook makeDefault />
      )}
    </>
  );
}
