import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Html, Ring, Sphere } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Planet({ planet, factor }) {
  const ref = useRef();

  const randomDiff = Math.random() * 10;

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime / 10;
    ref.current.position.x =
      factor * planet.axis * Math.cos(elapsed + randomDiff);
    ref.current.position.z =
      factor * planet.axis * Math.sin(elapsed + randomDiff);
  });

  return (
    <group
      rotation={[((Math.random() < 0.5 ? 1 : -1) * Math.random()) / 5, 0, 0]}
    >
      <group ref={ref}>
        <Sphere scale={0.005}>
          <meshStandardMaterial color="cyan" />
        </Sphere>
        <Html fontSize={0.1} as="div">
          <div className={"marker"}></div>
          <div className="marker-name">{planet.planetName}</div>
        </Html>
      </group>
      <Ring
        args={[planet.axis * factor, planet.axis * factor * 1.005, 120, 30]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial color="#13496C" side={DoubleSide} />
      </Ring>
    </group>
  );
}
