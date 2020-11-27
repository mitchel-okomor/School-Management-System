
//generate a unique id for students
const studendID = function randomID() {
    const letters = "0123456789ABCDEF";
    let id = "SD";
    for (let i = 0; i < 9; i++) {
      id += letters[Math.floor(Math.random() * 16)];
    }
    return id;
  }

  
//generate  a unique id for staffs
const staffID = function randomID() {
    const letters = "0123456789ABCDEF";
    let id = "SF";
    for (var i = 0; i < 9; i++) {
      id += letters[Math.floor(Math.random() * 16)];
    }
    return id;
  }

const school = {
    students : [],
     staffs : [],
     name : "Dev School",
     address : "Lagos, Nigeria",

//register a student
registerStudent: function(name, sex, age, fees, phone, address ){
    const id = studendID();
   const feesPaid = 0;
   const feesBalance = parseInt(fees) ;
    const student = {id, name, sex, age, fees, feesPaid, feesBalance, phone, address}
    this.students.push(student);
},


//get  student
getAllStudents: function(){

// for example
const students = this.students.map((item)=>{
    return item;
})
console.log(students);
return students
},


//get a single student
getStudent: function(id){

const student = this.students.filter(item=> item.id === id)
console.log(students);
return student
},


//modify a student record
modifyStudent: function(id, newInfo){
const index = this.students.findIndex(item => item.id === id);
console.log(index);
const modified = this.students.splice(index,1, newInfo);
console.log(modified);
return modified;
},

//Delete Student
deleteStudent: function(id){
  const index = this.students.findIndex(item => item.id === id);
  console.log(index);
const deleted = this.students.splice(index,1);
console.log(deleted);
return deleted;
},

//employ a staff
employStaff: function ( name, sex, phone, address, salary ){
    const id = staffID();
    const salaryPaid = 0;
    const salaryBalance = salary;
    const staff = {id, name, sex, phone, address, salary, salaryPaid, salaryBalance};
    this.staffs.push(staff)
    
    },
    

//get all staffs in the school
getAllStaffs: function(){
// for example
const staffs = this.staffs.map((item)=>{
  return item;
})
console.log(students);
return staffs
},

//get a single staff

getStaff: function(id){
  const staff = this.staffs.filter(item=> item.id === id)
  console.log(staff);
  return staff;
},

//modify a staff record
modifyStaff: function(id, newInfo){
  const index = this.staffs.findIndex(item => item.id === id);
  console.log(index);
const  modified = this.staffs.splice(index,1, newInfo);
  console.log(modified);
  return modified;
},

deleteStaff: function(id){
  const index = this.staffs.findIndex(item => item.id === id);
  console.log(index);
 const deleted = this.staffs.splice(index,1);
console.log(deleted);
return deleted;
},

//check school account balance
getSchoolAccountBalance: function(){
let initialVal =0;
const totalFeesPaid = this.students.reduce((total, item)=>{
return total + item.feesPaid;
}, initialVal);

const totalSalaryPaid  = this.staffs.reduce((total, item)=>{
  return total + item.salary;
  }, initialVal);

return totalFeesPaid - totalSalaryPaid;
},


//get information about the school
getInfo: function(){
    return {
    "name": this.name, "address":this.address,  "students":  this.student, "staffs": this.staffs
    }
},

//pay schoolFees
paySchoolFees(id, amount){
const student = this.students.map((item)=>{
    if(id === item.id){
        item.feesPaid = amount;
    item.feesBalance = item.fees  - amount ;
    return item;
    }
});

 console.log( student);   
 return student;
},

//get the total

totalFeesBalance(){
  let initialVal =0;
const balance = this.students.reduce((total, item)=>{
return total + item.feesBalance;
}, initialVal);
console.log(balance);
return balance;
},

//get all students owing fees
studentsWithsFeesBalance(){
  const students = students.filter(item => item.feesBalance > 0)
  console.log(students);
  return students;
},


//pay salary
payStaff(id, amount){
const staff = this.staffs.map((item) =>{
  if(id === item.id){
    item.salaryPaid = amount;
    item.salaryBalance = item.salary - amount;
    return item;
  }
})

console.log(staff);
return staff;
},

//get the total

totalSalaryBalance(){
  let initialVal =0;
const balance = this.staffs.reduce((total, item)=>{
return total + item.salaryBalance;
}, initialVal);
console.log(balance);

return balance;
},


staffsWithSalaryBalance(){
const staffs = this.staffs.filter(item => item.salaryBalance > 0)
console.log(staffs);
return staffs;
}




}






