
let panel = document.querySelector(".panel")
let numberButtons = document.querySelectorAll(".cifra")
let actionButtons = document.querySelectorAll(".knopka")
let firstNumber = ""
let secondNumber = ""
let znak = ""
let resultShown = false
panel.textContent = "0"
numberButtons.forEach(function(button) {
    button.onclick = function() {
        let number = button.textContent.trim()
        if (resultShown == true && znak == "") {
            firstNumber = ""
            resultShown = false
        }
        if (znak == "") {
            firstNumber = firstNumber + number
            panel.textContent = firstNumber
        }
        else {
            secondNumber = secondNumber + number
            panel.textContent = firstNumber + " " + znak + " " + secondNumber
        }
    }
})
actionButtons.forEach(function(button) {
    button.onclick = function() {
        let action = button.textContent.trim()
        if (action == "AC") {
            firstNumber = ""
            secondNumber = ""
            znak = ""
            resultShown = false
            panel.textContent = "0"
        }
        else if (action == "+" || action == "-" || action == "*" || action == "/") {
            if (firstNumber == "") {
                return
            }
            znak = action
            panel.textContent = firstNumber + " " + znak
            resultShown = false
        }
        else if (action == "=") {
            if (firstNumber == "" || secondNumber == "" || znak == "") {
                return
            }
            let num1 = Number(firstNumber)
            let num2 = Number(secondNumber)
            let result
            if (znak == "+") {
                result = num1 + num2
            }
            else if (znak == "-") {
                result = num1 - num2
            }
            else if (znak == "*") {
                result = num1 * num2
            }
            else if (znak == "/") {
                if (num2 == 0) {
                    panel.textContent = "Ошибка"

                    firstNumber = ""
                    secondNumber = ""
                    znak = ""
                    resultShown = false

                    return
                }
                result = num1 / num2
            }
            panel.textContent = result
            firstNumber = String(result)
            secondNumber = ""
            znak = ""
            resultShown = true
        }
    }
})