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
  // Create a frequency map for list2
  const frequencyMap = new Map();
  for (const num of list2) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let result = 0;
  const start = performance.now();

  // Single pass through list1
  for (const el1 of list1) {
    const count = frequencyMap.get(el1) || 0;
    result += el1 * count;

    // Optionally reduce the count to handle multiple occurrences
    if (count > 0) {
      frequencyMap.set(el1, Math.max(0, count - 1));
    }
  }

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
