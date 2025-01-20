import styles from "./Foodinput.module.css";

const FoodInput = ({handeKeyDown}) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handeKeyDown}
    ></input>
  );
};
export default FoodInput;
