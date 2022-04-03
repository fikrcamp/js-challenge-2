// Good Luck! You got this 💪🏾
// Write your code here.



let redScore1=96
let redScore2=108
let redScore3=89
let blueScore1=88
let blueScore2=91
let blueScore3=110

averageRedScore= (`${(redScore1+redScore2+redScore3)/3}`)
averageBlueScore= (`${(blueScore1+blueScore2+blueScore3)/3}`)

if(averageRedScore>averageBlueScore) { 
    console.log("Red Team won the tornament")

}
else if (averageBlueScore>averageRedScore) {
    console.log("Blue Tem won the tornament")

}
else{
    console.log("The Teams are tie")
}
