import PlanetData from "./PlanetData";

export default function PlanetsData({ planets }) {
  return (
    <div
      className="absolute top-32 right-4 z-50"
      style={{ perspective: "500px" }}
    >
      {planets.map((planet, i) => {
        return <PlanetData key={i} planet={planet} />;
      })}
    </div>
  );
}
