import classes from "./Start.module.css";
import sound from "./ambient.mp3";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  const audio = new Audio(sound);
  audio.loop = true;
  audio.volume = 0.05;

  const handleClick = () => {
    audio.play();
    navigate("/galaxy");
  };

  return (
    <div className="h-full w-full bg-slate-900	relative top-0 left-0 z-50 flex flex-col items-center justify-center">
      <div className="flex">
        <div className="mx-10">
          <div className="flex items-center text-white mb-2 ml-1">
            <div className={classes.button}>w</div>
            <p className="ml-8">
              <i className="fal fa-chevron-up mr-2"></i> forward
            </p>
          </div>
          <div className="flex items-center text-white mb-2 ml-3">
            <div className={classes.button}>s</div>
            <p className="ml-8">
              <i className="fal fa-chevron-down mr-2"></i>backward
            </p>
          </div>
          <div className="flex items-center text-white mb-2  ml-5">
            <div className={classes.button}>a</div>
            <p className="ml-8">
              <i className="fal fa-chevron-left mr-2"></i>left
            </p>
          </div>
          <div className="flex items-center text-white mb-2  ml-7">
            <div className={classes.button}>d</div>
            <p className="ml-8">
              <i className="fal fa-chevron-right mr-2"></i>right
            </p>
          </div>
          <div className="flex items-center text-white mb-2  ml-9">
            <div className={classes.button}>r</div>
            <p className="ml-8">
              <i className="fal fa-long-arrow-up mr-2"></i>top
            </p>
          </div>
          <div className="flex items-center text-white mb-2  ml-11">
            <div className={classes.button}>f</div>
            <p className="ml-8">
              <i className="fal fa-long-arrow-down mr-2"></i>down
            </p>
          </div>
        </div>
        <div className="mx-10">
          <div className="flex items-center text-white mb-2 ml-1">
            <div className={classes.button}>q</div>
            <p className="ml-8">
              <i className="fal fa-undo mr-2"></i>counterclockwise
            </p>
          </div>
          <div className="flex items-center text-white mb-2 ml-3">
            <div className={classes.button}>e</div>
            <p className="ml-8">
              <i className="fal fa-redo mr-2"></i>clockwise
            </p>
          </div>
          <div className="flex items-center text-white mb-2 ml-5">
            <div className={classes.button}>j</div>
            <p className="ml-8">
              <i className="fal fa-solar-system mr-2"></i>jump
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 text-white cursor-pointer" onClick={handleClick}>
        Click to Start
      </div>
    </div>
  );
}
