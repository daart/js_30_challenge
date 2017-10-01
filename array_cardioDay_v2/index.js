const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

let isAdult = people.some(person => (new Date().getFullYear() - person.year >= 19));
let areAdults = people.every(person => (new Date().getFullYear() - person.year >= 19));

let index = comments.findIndex(comment => (comment.id === 2039842))
let findElem = comments.find(comment => (comment.id === 123523))

let removeEl = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];

console.log(isAdult, areAdults, 'indx: ' + index, ' found element: ', findElem, ' removeEl: ', removeEl);