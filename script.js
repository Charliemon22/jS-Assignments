// ASSIGNMENT
let teamDumebiAverage = (96+108+89)/3;
console.log(teamDumebiAverage);

let teamCiromaAverage =(88+91+110)/3;
console.log(teamCiromaAverage);

if(teamDumebiAverage > teamCiromaAverage){
  console.log("Team Dumebi wins the trophy!")
}else if(teamDumebiAverage == teamCiromaAverage){
  console.log("It is a draw.")
}
else{
  console.log(`Team Ciroma wins the trophy!`)
}


//BONUS 1 


let teamDumebiBonus1 =(97+112+101)/3;
console.log(teamDumebiBonus1);

let teamCiromaBonus1 =(109+95+123)/3;
console.log(teamCiromaBonus1);

let minimumScore = 100;

if(teamDumebiBonus1 > teamCiromaBonus1 && teamDumebiBonus1 >= minimumScore){
  console.log(`Team Dumebi wins`)
}
else if(teamDumebiBonus1 < teamCiromaBonus1 && teamCiromaBonus1 >= minimumScore){
  console.log(`Team Ciroma wins`)
}
else{
  console.log(`No Winner`)
}

// BONUS 2

let teamDumebiBonus2 =(97+112+101)/3;
console.log(teamDumebiBonus2)

let teamCiromaBonus2 =(109+95+106)/3;
console.log(teamCiromaBonus2)

if(teamDumebiBonus2 > teamCiromaBonus2 && teamDumebiBonus2 >= minimumScore) {
  console.log(`Team Dumebi wins`)
}else if(teamDumebiBonus2 < teamCiromaBonus2 && teamCiromaBonus2 >= minimumScore){
  console.log(`Team Ciroma wins`)
}else if(teamCiromaBonus2 === teamDumebiBonus2 && teamCiromaBonus2 >= minimumScore && teamDumebiBonus2 >= minimumScore){
  console.log(`It ends in a draw`)
}
else{
  console.log(`No winner`)
}


// ASSIGNMENT 2

const score = prompt(`Enter your score`);

if(score >=81 && score <=100){
    console.log(`You made an A!`)
}else if(score >= 60 && score <81){
    console.log(`You made a B.`)
}else if(score >=50 && score < 60){
    console.log(`You made a C.`)
}else if(score >=45 && score < 50){
    console.log(`You got a D.`)
}else if(score >=25 && score < 45){
    console.log(`You got an E.`)
}else if(score >=0 && score < 25){
    console.log(`You got an F.`)
}else{
    console.log(`Please,input a valid score!`)
}

