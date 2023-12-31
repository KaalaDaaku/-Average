let store = [];
function arrayAvg() {
  let req = prompt("Enter the number or type 'quit'");

  while (true) {
    if (req.toLowerCase() === "quit") {
      console.log("You quit the app");
      break;
    } else {
      store.push(parseFloat(req));
      req = prompt("Enter the number or type 'quit'");
    }
  }
  console.log(store);
  let sum = 0;
  for (let i = 0; i < store.length; i++) {
    sum += store[i];
  }
  let avg = sum / store.length;

  console.log(`The Averge of the given numbers is ${avg}`);
}
arrayAvg();