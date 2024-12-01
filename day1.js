import fs from "node:fs";

/**
 * @param {Array<Number>} list1
 * @param {Array<Number>} list2
 */
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
  const start = performance.now();
  list1.forEach((el1) => {
    const firstIndex = list2.indexOf(el1);
    let counter = 0;
    if (firstIndex != -1) {
      for (let i = firstIndex; i < list2.length; i++) {
        if (list2[i] !== el1) {
          break;
        }
        counter++;
      }
    }
    result += el1 * counter;
  });
  console.log("duration :", performance.now() - start, " ms");
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
  // console.log("distance		: ", distanceBetweenTwoLists(list1, list2));
  console.log("similarity	: ", similarityScore(list1, list2));
});
