import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function Star() {
  const navigate = useNavigate();

  return (
    <>
      <Html as="div">
        <div onClick={() => navigate("/galaxy")} className="star"></div>
      </Html>
    </>
  );
}
