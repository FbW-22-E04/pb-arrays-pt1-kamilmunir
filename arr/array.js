//First excercise

/*var array1=[1,2,3,4,8,9];
var array2=[5,6];
console.log(array1);
array1.push(array2);
console.log(array1);

const vars=array1[2];
console.log(array1[2]);
array1[4]=10;
console.log(array1);*/
//*******************
//Second excercise
//.1
const eurocities=["Paris","London","Valletta","Prague","Rome"];//.6
//.2 eurocities.push("Budapast");

/*const secondcity=eurocities[1];
console.log(secondcity);
eurocities[0]="Berlin";
3.console.log(eurocities.length);*/

//4.eurocities.pop(eurocities.length-1);

/*console.log(eurocities.length);
console.log(eurocities);

//6 .eurocities.push("Budapast");
const asiancities=["Lahore","Japan","Shanghai","Seol","Bangkok"];



const all = [...eurocities, ...asiancities];//.7

console.log(eurocities+"    "+ asiancities+"   "+ all);//.7
console.log(all);

const allrevers = all.reverse();//.8
console.log('Reversed', allrevers);*/
/*
console.log(eurocities);
eurocities.splice(2,1);//.9
console.log(eurocities);*/

/*console.log(eurocities);
const slicvar=[];//.10
slicvar.push(eurocities.splice(2,4));


//console.log(eurocities.splice(2,4));
console.log(slicvar);*/

const asiancities=["Lahore","Japan","Shanghai","Seol","Bangkok"];

const all = [...eurocities, ...asiancities];

console.log(all);

all.splice(3,1,"Toronto");//.11
console.log(all);

console.log(all.length);
console.log(all[1]);

//const deletedArray = weekdays.splice(2, 0, 'wednesday');

all.splice(1,0,'Washington');
console.log(all);
console.log(all[1]);

const vst='moon',vst2='mars',vst3='saturn';
const strar=vst.split("");
console.log(strar);


