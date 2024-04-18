//Part 3: Transforming Data

/*While the data is now much more workable than it was in its string format, 
there is still a large amount of obscurity in the data itself. 
When we access an arbitrary index of the results array, 
it is impossible to know what that data is referring 
to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform 
our rows into objects.
Implement the following:
For each row of data in the result array produced by your code above, 
create an object where the key of each value is the heading 
for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, 
you do not need to create an object for the heading row itself.*/

/*For instance, the results of the example data 
above being passed through this step are as follows:*/
const data = [["ID", "Name", "Occupation", "Age"], 
              ["42", "Bruce", "Knight", "41"], 
              ["57", "Bob", "Fry Cook", "19"], 
              ["63", "Blaine", "Quiz Master", "58"], 
              ["98", "Bill", "Doctor’s Assistant", "26"]];

//Declare an array to store these objects: 
const resultArray = [];
//For each row (no need to create an object for the heading row itself)
for (let i = 1; i < data.length; i++) {
    const row = {};  //create an object 
    for (let j = 0; j < data[0].length; j++) {
        row[data[0][j].toLowerCase()] = data[i][j];
    }
    /*Store these objects in an array, 
    in the order that they were originally listed.*/
    resultArray.push(row);
}

console.log(resultArray);
