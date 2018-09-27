var lotto_number = '46 23 7 44 2 1';
var lotto_numbers = lotto_number.split(' ');

// Make the strings numbers
lotto_numbers.map(string_number => Number(string_number));

function num_compare(a,b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
