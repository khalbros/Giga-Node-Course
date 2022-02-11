import {add} from "./ecma-module-one.mjs"
import {subtract} from "./ecma-module-two.mjs"

function calculate(num1, num2) {
  add("+", num1, num2)
  subtract("subtract", num1, num2)
}

calculate(23, 13)
