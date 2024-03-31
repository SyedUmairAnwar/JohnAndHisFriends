/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item,i)=>{
    if (item.profession ==="developer"){
      console.log(item);
    }
  })
}
PrintDeveloperbyMap()
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item,i)=>{
    if (item.profession ==="developer"){
      console.log(item);
    }
  })
}
PrintDeveloperbyForEach()
function addData() {
  //Write your code here, just console.log
  let obj={id:4,name:"susan",age:"20",profession:"intern"} ;
  arr.push(obj);
  console.log (arr);
}
addData() 
function removeAdmin() {
  let remove=arr.filter((item,i)=>{
    if (item.profession !=="admin"){
      return item; 
    }
  })
  console.log(remove)
  //Write your code here, just console.log
}
removeAdmin()
function concatenateArray() {
  let arr1= [
    { id: 4, name: "syed", age: "24", profession: "devops" },
    { id: 5, name: "umair", age: "25", profession: "server Admin" },
    { id: 6, name: "Anwar", age: "26", profession: "Network Admin" },
  ]
  //Write your code here, just console.log
  let arr3=arr.concat(arr1);
  console.log(arr3);
}

concatenateArray()