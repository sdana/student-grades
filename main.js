const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 45, 67, 68]
let grades = {} // You'll need to change this line of code
let currentGradeCount = []
let arrayIndexValue = 0
const getGradeCount = () => {

}
getGradeCount()

for (let grade in scores) {

    if (scores[grade] <=100 && scores[grade] >=91){
        grades["A"] = (grades["A"]+1) || 1
        // currentGradeCount[0] = (currentGradeCount[0] + 1) || 1
    }
    else if (scores[grade] <= 90 && scores[grade] >= 81) {
        grades["B"] = (grades["B"]+1) || 1
        // currentGradeCount[1] = (currentGradeCount[1] + 1) || 1
    }
    else if (scores[grade] <= 80 && scores[grade] >= 71) {
        grades["C"] = (grades["C"]+1) || 1
        // currentGradeCount[2] = (currentGradeCount[2] + 1) || 1
    }
    else if (scores[grade] <= 70 && scores[grade] >= 61) {
        grades["D"] = (grades["D"]+1) || 1
        // currentGradeCount[3] = (currentGradeCount[3] + 1) || 1
    }
    else if (scores[grade] <= 60){
        grades["F"] = (grades["F"]+1) || 1
        // currentGradeCount[4] = (currentGradeCount[0] + 1) || 1
    }
}
for (let gradeType in grades){
    console.log(gradeType)
}
scores.sort(function(a,b){return(a-b)})
console.log(`The lowest score is ${scores[0]}`)
scores.sort(function(a,b){return(b-a)})
console.log(`The highest score is ${scores[0]}`)
console.log(grades)

// for (let i = 0; i < scores.length; i++) {
    
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
// }