// Part 2: Expanding Functionality

/*
Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
After you have implemented the above:
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
*/

const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

/*Declare a variable that stores the number of columns in each row
of data within the CSV.*/
let numberOfColumns = 1;
// variable that tells whether we are in the first raw or not
let firstRow = true;
// array with individual entries for each column.
let cells = [""];
//index of cells.arrey element we are currently working with
let column = 0;
//Each row should be stored in a parent array, with the heading row located at index 0.
let parentArray = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === ',') {
    if (firstRow) {
      cells.push("");
      numberOfColumns++;
    }
    column++;
    continue;
  }

  if (str[i] === "\n" || i + 1 === str.length) {
    parentArray.push(cells);
  }

  if (str[i] === "\n") {
    firstRow = false;

    cells = [];
    for (let j = 0; j < numberOfColumns; j++) {
      cells.push("");
    }

    column = 0;
    continue;
  }
  cells[column] += str[i];
}

console.log(parentArray);