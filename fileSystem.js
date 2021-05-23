const fs = require("fs");

const data = { name: "Employee 1 Name", salary: 2000 };
const dataJSON = JSON.stringify(data);

fs.writeFileSync("employees.json", dataJSON);

const dataBuffer = fs.readFileSync("employees.json");
const dataRead = dataBuffer.toString();
console.log(dataRead);

fs.unlink("employees.json", (err) => {
  if (err) console.log("File not deleted");
  console.log("file deleted ");
});
