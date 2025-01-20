import Item from "./Item";
const Itemlist=({foodItem1})=>{
  
  return <>
  <ul className="list-group">
    {foodItem1.map((item)=>(
      <Item key={item} foodItem= {item}></Item>
    ))}
  </ul>
  </>
}

export default Itemlist;