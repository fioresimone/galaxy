import { Billboard, Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useState } from "react";
import { useControls } from "../../store";

export default function Dyson({ active }) {
  const { camera } = useThree();

  const [load, setload] = useState(false);
  const updateControls = useControls((state) => state.setControls);

  const move = useCallback(() => {
    setload(() => true);

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[50];
    msg.text = "Jumping to " + active.name;
    msg.pitch = 0.91;
    speechSynthesis.speak(msg);

    setTimeout(() => {
      camera.updateProjectionMatrix(
        void ((camera.position.x = 1.05 * active.coordinates[0]),
        (camera.position.y = 1.05 * active.coordinates[1]),
        (camera.position.z = 1.05 * active.coordinates[2])),
      );
      camera.lookAt(0, 0, 0);
      setload(() => false);
    }, 4000);
  }, [active, camera]);

  useEffect(() => {
    const handleJump = (event) => {
      if (event.key === "j") {
        move();
        updateControls(false);
      }
      if (event.key === "c") {
        updateControls(true);
      }
    };

    // jump
    window.addEventListener("keydown", handleJump);

    return () => {
      window.removeEventListener("keydown", handleJump);
    };
  }, [move, updateControls]);

  return (
    <group position={active.coordinates}>
      <Html fontSize={0.1} as="div">
        <div className={"mark " + (load ? "jumping" : "")}></div>
        <div className="mark-name">{active.name}</div>
      </Html>

      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
        position={[0.05, 0, 0]}
      ></Billboard>
    </group>
  );
}
