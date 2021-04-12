const removeFromArray = function(baseArray, ...restArgs) {

    let filteredArray = baseArray;
    restArgs.forEach( n => {
        filteredArray = filteredArray.filter( (i) => !( (i === n) && (typeof i === typeof n) ) );
    });

    return filteredArray;
}

module.exports = removeFromArray
