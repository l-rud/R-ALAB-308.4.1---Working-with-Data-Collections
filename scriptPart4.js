//Part 4: Sorting and Manipulating Data
let inputArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
                  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
                  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
                  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];

//Remove the last element from the sorted array.
removedLast = inputArray.pop();
console.log(inputArray); 

/*Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }*/
inputArray.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});
console.log(inputArray); 

/*Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }*/
inputArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(inputArray);

/*use the values of each object within the array and the array’s length property to calculate 
the average age of the group. This calculation should be accomplished using a loop.*/
let sum = 0;
for (const record of inputArray) {
    sum += parseInt(record.age);
}
const average = sum / inputArray.length;

console.log(`Average age of the group is ${average}`)
