const str="Hello World";
const str2=str.split("");
const revstr=str2.reverse();
console.log(revstr);


const pets=["Elephant","Parrot","Piegon","Hen"];
const names=["a","b","c","d"];

const combi = [...pets, ...names];
console.log(combi);

console.log(combi.reverse());

console.log(names[2]);

names.push("H");

console.log(names);