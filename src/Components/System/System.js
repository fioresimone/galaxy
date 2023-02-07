import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate, useParams } from "react-router-dom";
import { Perf } from "r3f-perf";
import EnvSystem from "../Env/EnvSystem";

import Hud from "../Hud/Hud";

import Planet from "./Planet";
import Star from "./Star";
import PlanetsData from "./PlanetsData";
import StarData from "./StarData";

import data from "../Stars/final1.json";

export default function System() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const system = data.find((el) => el.slug === slug);
  const planets = system.planets;
  const maxAxis = Math.max(...planets.map((el) => el.axis));

  const factor = 10;
  return (
    <>
      <Hud />
      <PlanetsData planets={system.planets} />
      <StarData star={system} />
      <Canvas
        camera={{
          position: [0, maxAxis * factor * 2, maxAxis * factor * 2],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
      >
        <EnvSystem />

        <Sphere scale={0.01} onClick={() => navigate("/galaxy")}>
          <meshBasicMaterial color={system.color} />
        </Sphere>
        <Star />
        <Perf style={{ zIndex: "999999999" }} />

        {planets &&
          planets.map((el, i) => (
            <Planet key={i} planet={el} factor={factor} />
          ))}

        <pointLight />
        <OrbitControls
          minDistance={1}
          maxDistance={maxAxis * factor * 5}
          enablePan={false}
        />
      </Canvas>
    </>
  );
}
