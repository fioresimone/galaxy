import classes from "./Menu.module.css";
import { useActive } from "../../store";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const active = useActive((state) => state.active);
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex items-center justify-center absolute  " + classes.backdrop
      }
      style={{
        zIndex: 99999999,
        height: active ? "15vh" : "0vh",
      }}
    >
      <div className={classes.backdropContent}>
        {active && (
          <>
            <p className="text-center">{active && active.name}</p>

            {active.planets.length > 0 && (
              <div
                className="w-full flex justify-center items-center mt-2"
                onClick={() => navigate(`/system/${active.slug}`)}
              >
                <i className="fal fa-chevron-left fa-xs mx-2"></i>

                <i className="fal fa-chevron-left mx-2"></i>
                <div className={classes.cross}></div>
                <i className="fal fa-chevron-right mx-2"></i>
                <i className="fal fa-chevron-right fa-xs mx-2"></i>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
