const myarray=[1,2,3,9,8,7,5,9,8];
var text=0;
for (let i = 0; i < myarray.length; i++) {
    text += myarray[i];
    console.log(myarray[i]);
    
  }
  console.log(text);


  //***************************** */
  const arr=[5,9];
  console.log(arr);


  //***************************** */
  const arr2=[1,2];
  console.log(arr2[0]);


  //************************ */

  const arr3=[5,6,9,87,4];
  const vars=100;
  arr3[0]=vars;
  console.log(arr3);

  //***************** */
  console.log(arr3[arr3.length-1]);

  const arr4=[2,53,6,587,41];

   var d=589;
  for (let b = 0; b < arr4.length; b++) {
    text2 = arr4.includes(d);
    console.log(arr4[b]);
    
  }
  console.log(text2)
  if(text2==false){
    var ind=arr4.length;
    //console.log('index no' +  ""+ ind);
    arr4[ind]=d;
    
  }
  console.log(arr4);