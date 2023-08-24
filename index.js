let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

// "We are interested in retrieving only the students' names; all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']"
studentRecords.map((ele) => {
  console.log(ele.name.toUpperCase());
});

// "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"
studentRecords.map((ele) => {
  if (ele.marks > 50) {
    console.log(ele);
  }
  // console.log(ele.name.toUpperCase());
});
// second method
let res = studentRecords.filter((el) => {
  return el.marks > 50;
});
console.log(res);

// Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sum = studentRecords.reduce((pre_value, cur_value) => {
  return (pre_value += cur_value.marks);
}, 0);
console.log(sum);

sum = 0;

// studentRecords.map((mark) => {
//   sum += mark.marks;
// });
// console.log(sum);
// // second method
// let total1 = studentRecords.reduce((pre, cur) => {
//   return (pre += cur.marks);
// }, 0);
// console.log(total1);

// // id greater than 101
// let result22 = studentRecords
//   .filter((stu) => {
//     return stu.id > 101;
//   })
//   .reduce((preview, currentview) => {
//     return (preview += currentview.marks);
//   }, 0);
// console.log(result22);

// Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.
let res1 = studentRecords.filter((item) => {
  return item.marks > 50 && item.id > 120;
});
console.log(res1);

// This time we want to get only the names of the students who
// scored more than 50 marks from the same dataset used above.
studentRecords.map((item) => {
  if (item.marks > 50) {
    console.log(item.name);
  }
});
// This time we are required to print the sum of marks of the students with id > 120.

var sum1 = 0;
for (var i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120) {
    sum1 += studentRecords[i].marks;
  }
}
console.log(sum1);
// This time we are required to print the total marks of the students with marks greater than 50 after
// a grace of 15 marks has been added to those students who scored less than 50.
var sum2 = 0;
for (var i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks > 50) {
    sum2 += studentRecords[i].marks;
  } else {
    sum2 += studentRecords[i].marks + 15;
  }
}
console.log(sum2);
