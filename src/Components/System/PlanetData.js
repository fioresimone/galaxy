import { useState } from "react";

export default function PlanetData({ planet }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="planet-data-wrapper pl-2" onClick={() => setOpen(!open)}>
      <p className="planet-name">{planet.planetName}</p>

      <div
        className="planet-data px-2 text-xs"
        style={{ height: open ? "120px" : "0px" }}
      >
        <p>
          Mass: <span className="float-right">{planet.mass}</span>
        </p>
        <p>
          Radius: <span className="float-right">{planet.radius}</span>
        </p>
        <p>
          Period: <span className="float-right">{planet.period}</span>
        </p>
        <p>
          Axis: <span className="float-right">{planet.axis}</span>
        </p>
        <p className="pb-2">
          Temperature: <span className="float-right">{planet.temperature}</span>
        </p>
      </div>
    </div>
  );
}
