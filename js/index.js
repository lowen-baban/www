//integrate react
//const root = ReactDOM.createRoot(document.getElementById('root'));

const one = document.getElementById("one");
function one_click() {
  console.log("1");
  one.style.backgroundColor = "red";
}
one.addEventListener("click", one_click);
  

const two = document.getElementById("two");
two.addEventListener("click", two_click);

const three = document.getElementById("three");
three.addEventListener("click", three_click);


function two_click() {
  console.log("2");
}
  
function three_click() {
  console.log("3");
}
  