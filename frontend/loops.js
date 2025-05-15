let arr = [52,1,3,47]
const greaterthanseven = (e)=> {
  if(e>7) {
    return true
  }
  else {
    return false
  }
}

console.log(arr.filter(greaterthanseven))
