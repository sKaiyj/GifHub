import CustomButton from "../button/CustomButton";
import styles from "./buttonsGroup.module.scss";
import { Link, useLocation } from "react-router-dom";
const ButtonsGroup = () => {
  const active = useLocation().pathname;
  return (
    <div className={styles.buttonsGroup}>
      <Link to='/'>
        <CustomButton className={active === "/" ? styles.active : ""}>
          Search
        </CustomButton>
      </Link>
      <Link to='/best'>
        <CustomButton className={active === "/best" ? styles.active : ""}>
          Best
        </CustomButton>
      </Link>
      <Link to='/random'>
        <CustomButton className={active === "/random" ? styles.active : ""}>
          Random
        </CustomButton>
      </Link>
    </div>
  );
};

export default ButtonsGroup;
