// Array of values to check for use in our fizzBuzzers function
// The index + 1 of each populated element is used to determine which elements are printed
const arrayOfValues = [undefined, undefined, 'fizz', undefined, 'buzz', undefined, undefined, 'wut']

// Function used by fizzbuzzers() to iterate through the elements of the arrayOfValues
// and compare them to the current value of primaryCounter
const checkEachValue = (primaryCounter, arrayOfValues, outputBuilder = '', arrayCounter = 0) => {
    if(arrayCounter < arrayOfValues.length) {
        if(arrayOfValues[arrayCounter] != undefined) {
            if((primaryCounter % (arrayCounter + 1)) === 0) {
                outputBuilder += arrayOfValues[arrayCounter]
            }
        }
        
        return checkEachValue(primaryCounter, arrayOfValues, outputBuilder, arrayCounter + 1)
    } else {
        return outputBuilder
    }
}

// Iterates through each integer between primaryCounter and 1, checking which are 
// divisible by the indexes of populated elements in the arrayOfValues
const fizzBuzzers = (primaryCounter, arrayOfValues, output = '') => {
    if(arrayOfValues.length == 0) {
        return 'No Values Present in Array'
    }

    if(primaryCounter === 0) {
        return output
    }

    let outputSegment = checkEachValue(primaryCounter, arrayOfValues)
    if(outputSegment !== '')
    {
        output += primaryCounter + ': ' + outputSegment + '\n'
    }

    return fizzBuzzers(primaryCounter - 1, arrayOfValues, output)
}

// Prints the result of the fizbuzzers program to the console
console.log(fizzBuzzers(300, arrayOfValues))
