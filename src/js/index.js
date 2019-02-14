//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSymbol());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);
};

let generateRandomNumber = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let Indnumber = Math.floor(Math.random() * number.length);
  return number[Indnumber];
};

let generateRandomSymbol = () => {
  let symbol = ["spade", "heart", "club", "diamond"];
  let Indsymbol = Math.floor(Math.random() * symbol.length);
  return symbol[Indsymbol];
};
