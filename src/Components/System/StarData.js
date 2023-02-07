export default function StarData({ star }) {
  return (
    <div
      className="absolute top-32 left-4 z-50"
      style={{ perspective: "500px" }}
    >
      <div className="star-data-wrapper pl-2">
        <p className="star-name pb-2">{star.name}</p>

        <div className="star-data px-2 text-xs">
          <p className="mb-2">
            Distance from Sol:{" "}
            <span className="float-right">{star.distance.toFixed(2)}</span>
          </p>
          <p className="mb-2">
            Coordinates:{" "}
            <span className="float-right">
              {star.coordinates.map((el) => el.toFixed(2)).join(" • ")}
            </span>
          </p>
          <p className="mb-2">
            Temperature: <span className="float-right">{star.temperature}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
