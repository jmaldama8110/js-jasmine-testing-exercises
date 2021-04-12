const ftoc = function(temp) {

  const result = (temp - 32) * (5/9);
  const roundedTemp = Math.round(result * 10) / 10

  return roundedTemp;
}

const ctof = function(temp) {

  const result = ( temp * (9/5) ) + 32;
  const roundedTemp = Math.round(result * 10) / 10

  return roundedTemp;
}

module.exports = {
  ftoc,
  ctof
}


