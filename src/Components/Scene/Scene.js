import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useActive } from "../../store";

import Sol from "../Sol/Sol";
import Env from "../Env/Env";
import Camera from "./Camera";
import Hud from "../Hud/Hud";
import Controls from "./Controls";
import Stars from "../Stars/Stars";
import Menu from "../Menu/Menu";

export default function Scene() {
  const updActive = useActive((state) => state.setActive);

  return (
    <>
      <Hud />
      <Menu />

      <Canvas
        raycaster={{ params: { Points: { threshold: 0.175 } } }}
        gl={{ antialias: true, alpha: false }}
        flat={true}
        dpr={[1, 1]}
        onPointerMissed={() => updActive(null)}
      >
        <Suspense fallback={null}>
          <Stars />

          <Camera />
          <Env />

          <Perf style={{ zIndex: "999999999" }} />
          <Controls />

          <Sol />
        </Suspense>
      </Canvas>
    </>
  );
}
