console.log("===============Part-1===================");

let title = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let splitRows = title.split("\n");

let cell;
for (let element of splitRows){
    cell = element.split(",");
    console.log(cell[0],cell[1],cell[2],cell[3]);
}

console.log("");

console.log("===============Part-2===================");

let numRow = splitRows.length;    //Total rows in the csv text.

const twoDimension = [];

for (i = 0; i < numRow; i++) {
    twoDimension.push(splitRows[i].split(","));
}

console.log(twoDimension);

console.log("");

console.log("===============Part-3======================");

let column;

for (let element of splitRows) {
    column = element.split(",");
}

let numCol = cell.length; //Total number of column of the csc text

const parentArray = twoDimension[0];
const objectArray = [];

for (let i = 1; i <= numCol; i++) {
    let myObject = {};

    for (let x = 0; x < numCol; x++) {
        myObject[parentArray[x]] = (twoDimension[i].at(x));
    }

    objectArray.push(myObject);
}

console.log(objectArray);

console.log("");

console.log("===============Part-4======================");

objectArray.pop();

objectArray.splice(1,0,{
    ID: "48",
    Name: "Barry",
    Occupation: "Runner",
    Age: "25"
});


objectArray.push({
    ID: "7",
    Name: "Bilbo",
    Occupation: "None",
    Age: "111"
});

console.log(objectArray);

let sum = 0;

for(let i = 0; i < objectArray.length; i++){
    sum += Number(objectArray[i].Age);
}

let ageAvg = sum / objectArray.length;
console.log("The average age os the group is:",ageAvg);

console.log("");

console.log("===============Part-5======================");

let csvFormat = Object.keys(objectArray[0]).join() + '\\n';

for(let i = 0; i < numCol; i++){
    csvFormat += Object.values(objectArray[i]).join() + '\\n';
}

csvFormat = csvFormat.slice(0,-2);
console.log(csvFormat);







