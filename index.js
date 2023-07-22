const arr = ["fuck", "fucker", "lawde", "boshdk"];

const vulgarWords = (str) => {
  const regex = new RegExp(arr.join('|'), 'gi'); // Creates a case-insensitive regular expression from the array elements
  const matches = str.match(regex); // Find all matches in the string

  return !matches; // Return true if no matches were found (no vulgar words), false otherwise.
};
module.exports=vulgarWords