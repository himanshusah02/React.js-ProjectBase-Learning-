function Line2(){
  let now = new Date();
  let datetime = now.toLocaleString();
  let time = new Date();
  return  <div className="second-Line"> <p>This is the current time : {datetime}</p></div>
}

export default Line2;