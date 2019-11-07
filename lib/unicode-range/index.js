const glyphs_SC = "，。"

const split_SC = glyphs_SC.split("")

const arr_uni_SC = []

function cvtUni(c) {
  return "U+" + ("000" + c.charCodeAt(0).toString(16)).substr(-4)
}

split_SC.forEach(c => {
  arr_uni_SC.push(cvtUni(c))
})

arr_uni_SC.sort()

const str_uni_SC = arr_uni_SC.join()

console.log("$yakuhansc-unicode: " + str_uni_SC + " !default;")
