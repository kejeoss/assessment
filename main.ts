input.onButtonPressed(Button.A, function () {
    basic.showNumber(walk)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    walk += 1
})
let walk = 0
walk = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
loops.everyInterval(3600000, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.showString("stand")
    basic.showIcon(IconNames.Chessboard)
})
