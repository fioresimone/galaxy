import classes from "./Topbar.module.css";
export default function Topbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.leftBlock}></div>
      <div className={classes.rightBlock}></div>
    </div>
  );
}
