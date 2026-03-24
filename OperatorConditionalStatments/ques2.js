let scores = prompt(" Enter your score(0-100)");
let grade;

if (scores >= 90 && scores <= 100) {

   grade = " A";

}
else if (scores >= 70 && scores <= 89) {
     grade = " B";
}
else if (scores >= 60 && scores <= 69) {
   grade = " C";
}

else if (scores >= 50 && scores <= 59) {
   grade = " D";
}
else if(scores >= 0 && scores <= 49){
    grade = " F";
}
console.log(" according too your  scrore , your grade was : ", grade);
