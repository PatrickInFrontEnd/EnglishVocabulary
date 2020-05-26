const fs = require("fs");

const data = fs.readFileSync("./words.txt", { encoding: "utf-8" });
if (!data) return;

const splitted = data
    .split("\r\n")
    .map((term) => term.split(" - "))
    .map(([term, def]) => ({ term, def }));

const formattedData = JSON.stringify(splitted);

fs.writeFileSync("./../data/words.json", formattedData);
console.log("Done.");
