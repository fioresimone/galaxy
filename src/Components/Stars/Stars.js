import React, { useMemo } from "react";
import * as THREE from "three";

import { BufferAttribute } from "three";
import Dyson from "./Dyson";
import url from "../../Assets/star.png";

import allData from "./final1.json";
import { useTexture } from "@react-three/drei";
import { useActive, useControls } from "../../store";

const tempColor = new THREE.Color();

export default function Stars() {
  const updateControls = useControls((state) => state.setControls);
  const updActive = useActive((state) => state.setActive);
  const active = useActive((state) => state.active);

  const texture = useTexture(url);

  let data = allData; /* .slice(0, 10000); */

  const points = useMemo(() => {
    const p = data.map((el) => el.coordinates).flat();
    return new BufferAttribute(new Float32Array(p), 3);
  }, [data]);

  const colors = useMemo(() => {
    return new BufferAttribute(
      Float32Array.from(
        new Array(data.length).fill(0).flatMap((_, i) => {
          return tempColor.set(data[i].color || "#ffffff").toArray();
        }),
      ),
      3,
    );
  }, [data]);

  const click = (e) => {
    e.stopPropagation();

    updActive(data[e.index]);
    updateControls(false);
  };

  return (
    <>
      <group>
        {active && <Dyson active={active}></Dyson>}
        <points
          onClick={(e) => {
            click(e);
          }}
        >
          <bufferGeometry>
            <bufferAttribute attach={"attributes-position"} {...points} />
            <bufferAttribute attach={"attributes-color"} {...colors} />
          </bufferGeometry>
          <pointsMaterial
            size={0.5}
            sizeAttenuation={true}
            map={texture}
            depthWrite={false}
            alphaMap={texture}
            transparent={true}
            vertexColors
          />
        </points>
      </group>
    </>
  );
}
