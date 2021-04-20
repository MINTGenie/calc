function calc (num: number, num2: number, operator: string) {
    if (operator == "add") {
        result = num + num2
    } else if (operator == "sub") {
        result = num - num2
    } else if (operator == "mul") {
        result = num * num2
    } else if (operator == "div") {
        result = num / num2
    } else if (operator == "rem") {
        result = num % num2
    } else {
        serial.writeLine("unknown operator")
    }
}
let oper = ""
let input_2 = 0
let input2 = 0
let result = 0
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeLine("type a number")
    input2 = parseFloat(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
    serial.writeLine("type 2nd number")
    input_2 = parseFloat(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
    serial.writeLine("choose operator - add, sub, mul, div, rem")
    oper = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    calc(input2, input_2, oper)
    serial.writeLine("Answer is " + result)
    basic.pause(2000)
    result = 0
})
