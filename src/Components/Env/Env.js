import front from "./1.png"
import back from "./3.png"
import top from "./5.png"
import left from "./2.png"
import right from "./4.png"
import bottom from "./6.png"
import { Environment } from "@react-three/drei";

export default function Env() {
  return (
    <Environment
      background={true}
      files={[front, back, top, bottom, left, right]}
    />
  );
}
