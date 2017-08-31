// Array of values to check for use in our fizzBuzzers function
// The index + 1 of each populated element is used to determine which elements are printed
const arrayOfValues = [undefined, undefined, 'fizz', undefined, 'buzz', undefined, undefined, 'wut']

/**
 * @function checkEachValue
 * @author Greg Hill
 * @description Iterates through the elements of the arrayOfValues comparing them to primaryCounter
 * @param primaryCounter the current numerator in the FizzBuzz program
 * @param arrayOfValues an array of strings and undefined elements used as a key
 * @param outputBuilder a String used to build the result
 * @param arrayCounter an index counter for the arrayOfValues
 * @returns outputBuilder, a string that contains the result of the operations on primaryCounter
 */
const checkEachValue = (primaryCounter, arrayOfValues, outputBuilder = '', arrayCounter = 0) => {
    if (arrayCounter < arrayOfValues.length) {
        if (arrayOfValues[arrayCounter] !== undefined) {
            if ((primaryCounter % (arrayCounter + 1)) === 0) {
                outputBuilder += arrayOfValues[arrayCounter]
            }
        }

        return checkEachValue(primaryCounter, arrayOfValues, outputBuilder, arrayCounter + 1)
    } else {
        return outputBuilder
    }
}

/**
 * @function fizzBuzzers
 * @author Greg Hill
 * @description A recursive version of FizzBuzz that can use any number as the denominator and print any string
 * @param primaryCounter the number of times the function runs
 * @param arrayOfValues an array of strings and undefined elements used as a key
 * @param output the result of the function in the form of a String
 * @returns a formatted string containing the result of the FizzBuzz operations
 */
const fizzBuzzers = (primaryCounter, arrayOfValues, output = '') => {
    if(arrayOfValues.length === 0) {
        return 'No Values Present in Array'
    }

    if(primaryCounter === 0) {
        return output
    }

    let outputSegment = checkEachValue(primaryCounter, arrayOfValues)
    if (outputSegment !== '')
    {
        output += primaryCounter + ': ' + outputSegment + '\n'
    }

    return fizzBuzzers(primaryCounter - 1, arrayOfValues, output)
}

// Prints the result of the fizbuzzers program to the console
console.log(fizzBuzzers(300, arrayOfValues))
