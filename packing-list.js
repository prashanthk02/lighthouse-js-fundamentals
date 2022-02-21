const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack: using for loop");
for(let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

console.log("Kitchen stuff to pack: using while loop");
let k = 0;
while(k < packingList.length) {
  console.log(packingList[k]);
  k++;
}
