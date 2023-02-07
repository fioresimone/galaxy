import classes from "./Bottombar.module.css";

export default function Bottombar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.leftBlock}></div>
      <div className={classes.rightBlock}></div>
    </div>
  );
}
