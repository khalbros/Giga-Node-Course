export function subtract(params, a, b) {
  if (params === "Subtract" || "subtract" || "-") {
    return console.log(a - b)
  } else {
    return console.log("invalide entries")
  }
}
