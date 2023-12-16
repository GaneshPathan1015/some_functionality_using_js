const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "john", age: 24, profession: "student" },
    
    { name: "jane", age: 27, profession: "admin" },
    
    { name: "jane", age: 27, profession: "artist" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "john", age: 24, profession: "developer" },
    { name: "john", age: 24, profession: "student" },
    
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((obj)=>{
        if(obj.profession === "developer"){
            console.log(obj);
        }
    })

    
  }
  
  // 2. Add Data
  function addData() {
    let obj ={};
    let name = prompt("Enter The name : ")

    let age = parseInt(prompt("Enter The age : "))
    let profession = prompt("Enter The profession : ")
    obj["name"] = name;
    obj["age"] = age;
    obj["profession"] = profession;

    data.push(obj);
    console.log(data);

  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let pro = 'admin';
    for(let i=0;i<data.length;){
        let obj = data[i];
        // console.log(obj);
        if(obj.profession === pro){
            
            // console.log(i);
            data.splice(i,1);
            
        }
        else{
            i++;
        }
    }
    console.log("admin removed remaning data is ");
    console.log(data);
    
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    // dummy array 
    let dummy = [
        myobj = {
            name:"ganesh",
            age:24,
            roll : 1234,
        }
    ]
    let concatArr = data.concat(dummy);
    console.log(concatArr);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalperson = data.length;
    let totalage = 0;
    for(let i=0;i<data.length;i++){
        let obj = data[i];
        totalage = totalage+ obj.age;
    }
    console.log(totalage/totalperson);

  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let check = false;
     data.forEach((obj)=>{
        if(obj.age>25){
           check = true;
           
        }
    })
    console.log(check);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let temobj = {};
    data.forEach((obj)=>{
        let prof = obj.profession;
        
        temobj[`${prof}`]=true;
        
    })
    console.log(Object.keys(temobj));
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>{
       return a.age-b.age;
    })
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((obj)=>{
        if(obj.name==='john'){
            obj.profession = "manager";
            console.log(obj);
        }
    })
    
    
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let temobj = {};
    data.forEach((obj)=>{
        let prof = obj.profession;
        
        temobj[`${prof}`]=true;
        
    })
    console.log(Object.keys(temobj).length);
  }