// TODO: write your code here
// import sum from "./basic";

// console.log("worked");

// console.log(sum([1, 2]));

export default function healthClearFunction(data) {
  if (data.health <= 15) {
    return "critical";
  }
  if (data.health <= 50) {
    return "wounded";
  }
  return "healthy";
}

export function healthSortingFunction(data) {
  return [...data].sort((pos1, pos2) => pos2.health - pos1.health);
}
