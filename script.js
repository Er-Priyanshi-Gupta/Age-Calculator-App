let userInputDate = document.getElementById("date");
userInputDate.max = new Date().toISOString().split("T")[0];
let calculatedAge = document.getElementById("result");
function agecalculation(){
let dob = new Date(userInputDate.value);
let date1 = dob.getDate();
let month1 = dob.getMonth()+1;
let year1 = dob.getFullYear();

let todayDate = new Date();
let date2 = todayDate.getDate();
let month2 = todayDate.getMonth()+1;
let year2 = todayDate.getFullYear();

let date3,month3,year3;
year3 = year2-year1;
if(month2>=month1){
    month3 = month2-month1;
}else{
    year3-=1;
    month3 = 12+month2-month1;
}
if(date2>=date1){
    date3 = date2-date1;
} else{
    month3-= 1;
    date3 = getDaysInMonth(year1,month1)+date2-date1;
}
if(month3<0){
    month3 = 11;
    year3-= 1;
}
if((year3==1|| year3==0) && (month3==0||month3==1) && (date3==0 && date3==1)){
    confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> year, <span>${month3}</span> month, <span>${date3}</span> day old.`);
}
else if((year3==1|| year3==0) && (month3==0||month3==1)){
    confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> year, <span>${month3}</span> month, <span>${date3}</span> days old.`);
}
else if((year3==1|| year3==0)  && (date3==0 && date3==1)){
    confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> year, <span>${month3}</span> months, <span>${date3}</span> day old.`);
}
else if((month3==0||month3==1) && (date3==0 && date3==1)){
    confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> years, <span>${month3}</span> month, <span>${date3}</span> day old.`);
}
else if(year3==1|| year3==0){

    confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> year, <span>${month3}</span> months, <span>${date3}</span> days old.`);
}
else if(month3==0||month3==1){
    confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> years, <span>${month3}</span> month, <span>${date3}</span> days old.`);
}
else if(date3==0 && date3==1){
    confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> years, <span>${month3}</span> months, <span>${date3}</span> day old.`);
}
else{
confirm.log(calculatedAge.innerHTML=`You are <span>${year3}</span> years, <span>${month3}</span> months, <span>${date3}</span> days old.`);
}
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}