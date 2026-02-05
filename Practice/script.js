// const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];

// function analyzeScores(scores){
//     let exc =0; let pass =0; let fail =0; let totalScore =0;
//     for(let i=0; i<scores.length; i++){
//         totalScore = totalScore + scores[i];
//         if(scores[i] >= 90){
//             exc ++;
//         }
//         else if(scores[i] >= 60){
//             pass ++;
//         }
//         else{
//             fail ++;
//         }
//     }
//     const validStud =scores.length;
//     const averageScore = totalScore/ validStud;
//     const ans ={
//         totalStudents: validStud,
//         excellent: exc,
//         pass: pass,
//         fail: fail,
//         averageScore: averageScore
// }
// }

// const result = analyzeScores(scores);
// console.log(result);

setImmediate(()=> {
    console.log("hello")
})
setTimeout(()=> {
    console.log("bye");
}, 0)
console.log("hi");