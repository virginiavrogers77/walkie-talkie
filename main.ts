// Send message when buttons are pressed
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello from A")
    basic.showString("in positions")
})
// Receive message
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Hello from B")
    basic.showString("in poitions")
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Pitchfork)
