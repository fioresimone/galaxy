import front from "./front.png";
import back from "./back.png";
import top from "./top.png";
import left from "./left.png";
import right from "./right.png";
import bottom from "./bottom.png";

import { Environment } from "@react-three/drei";

export default function EnvSystem() {
  return (
    <Environment
      background={true}
      files={[front, back, top, bottom, left, right]}
    />
  );
}
