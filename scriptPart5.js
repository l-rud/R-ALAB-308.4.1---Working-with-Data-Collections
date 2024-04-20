//Part 5: Full Circle

//As a final task, transform the final set of data back into CSV string.


arrOfObjects = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
                { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
                { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
                { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
                { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

console.log(arrOfObjects);

//Define column headers
const columns = ['id', 'name', 'occupation', 'age'];
let csv = columns.join(','); // 

for (let i = 0; i < arrOfObjects.length; i++) {
    csv += '\n';

    const obj = arrOfObjects[i];
    for (let j = 0; j < columns.length; j++) {
        if (j > 0) {
            csv += ',';
        }

        csv += obj[columns[j]];
    }
}

console.log(csv)




