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
  console.log(distanceBetweenTwoLists(list1, list2));
});
