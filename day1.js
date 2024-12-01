import fs from "node:fs";

function distanceBetweenTwoLists(list1, list2) {
  list1.sort();
  list2.sort();
  let result = 0;
  for (let i = 0; i < list1.length; i++) {
    result += Math.abs(list1[i] - list2[i]);
  }
  return result;
}
/**
 * @param {Array<Number>} list1
 * @param {Array<Number>} list2
 */
function similarityScore(list1, list2) {
  list2.sort();
  let result = 0;
  list1.forEach((el1) => {
    let counter = 0;
    list2.forEach((el2) => {
      if (el1 === el2) {
        counter++;
      }
    });
    result += el1 * counter;
  });
  return result;
}

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const list1 = [];
  const list2 = [];
  let lines = data.split("\n");
  lines.pop();
  lines.forEach((line) => {
    const splitedLine = line.split("   ");
    list1.push(Number.parseInt(splitedLine[0]));
    list2.push(Number.parseInt(splitedLine[1]));
  });
  console.log("distance :", distanceBetweenTwoLists(list1, list2));
  console.log("similarity: ", similarityScore(list1, list2));
});
