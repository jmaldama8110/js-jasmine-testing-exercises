const sumAll = function (numberOne, numberTwo) {

    if (!((typeof numberOne === 'number') && (numberOne >= 0) &&
        (typeof numberTwo === 'number') && (numberTwo >= 0)))
        return 'ERROR';

    let initial = numberOne < numberTwo ? numberOne : numberTwo;
    let final = numberOne > numberTwo ? numberOne : numberTwo;


    let iteration = initial;
    let sum = 0;

    while (iteration <= final) {
        sum = sum + iteration;
        iteration++;

    }
    return sum;

}

module.exports = sumAll
