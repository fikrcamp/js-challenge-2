// red
let red1 = 96
let red2 = 108
let red3 = 89
let redavg = (red1+red2+red3/3)
// blue
let blue1 = 88
let blue2 =91
let blue3 = 110
let blueavg = (blue1+blue2+blue3/3)
// comparision
if (redavg < blueavg <= 100) {
    console.log("red won!")
    
} else if (blueavg < redavg <= 100){
    console.log("blue won!")


}
else{
    console.log("its a draw!")
}