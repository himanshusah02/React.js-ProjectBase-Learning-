import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClick =(event)=>{
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };

  return (
    <li className={`${styles["hs-item"]} list-group-item ${bought && "active"}`}>
      <span className={`${styles["hs-span"]}`}> {foodItem}</span>
      <button
        className={`${styles.button} btn btn-info `}
        // onClick={(event)=>handleBuyButtonClick(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
