
var type = "student";

function howMany(count, type) {
  if (count !== 1) {
    type = type + "s";
  }
  return `There are ${count} ${type}`;
}
