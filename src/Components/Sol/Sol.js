import { Html } from "@react-three/drei";
import classes from "./Sol.module.css";
export default function Sol() {
  return (
    <Html fontSize={0.1} as="div">
      <div className={classes.loader}></div>
    </Html>
  );
}
