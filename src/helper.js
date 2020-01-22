const adjectives = [
  "awesome",
  "stunning",
  "wonderful",
  "dazzling",
  "delicious",
  "gorgeous",
  "amazing",
  "fantastic",
  "charming",
  "entrancing",
  "exquisite",
  "admirable"
];

function randomAdj(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const rdmAdj = adjectives[randomIndex].toUpperCase();
  return rdmAdj;
}


export { randomAdj, adjectives };
