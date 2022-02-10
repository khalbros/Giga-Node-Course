export function add(params, a, b) {
  if (params === "Add" || "add" || "+") {
    return console.log(a + b)
  } else {
    return console.log("invalide entries")
  }
}
