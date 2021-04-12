const reverseString = function (baseString) {

    const newSplitString = baseString.split('').reverse().join('');
    const finalString = newSplitString.replace(',','');
    
    return finalString;
    
}

module.exports = reverseString
