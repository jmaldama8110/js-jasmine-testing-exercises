const repeatString = function (baseString, count) {

    let newString = '';
    let i = 0;

    if (count === 0) return '';
    if ( count < 0 ) return 'ERROR';

    do {

        i = i + 1;
        newString = newString + baseString;

    } while (i < count);


    return newString;
}

module.exports = repeatString
