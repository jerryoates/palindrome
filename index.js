function isPalandrome(myStr) {
  let value = ""
  for (i = 0; i < myStr.length; i++){
    value = (myStr.charAt(i) === myStr.charAt(myStr.length-(i+1)))
    console.log(myStr.charAt(i), myStr.charAt(myStr.length-(i+1)))
    console.log(value)
    if (value === false){
      return false
    }
  }
return true
}

module.exports = isPalandrome
