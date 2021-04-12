const leapYears = function(leapYear) {
    
    const ruleOne = (leapYear % 4 === 0);
    
    const ruleTwo = !( leapYear % 100 === 0 );
    const ruleThree = ( leapYear % 400 === 0);

    return ruleOne && ( ruleTwo || ruleThree );

}

module.exports = leapYears
