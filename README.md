# RecursiveFizzBuzzJS
A FizzBuzz program that operates recursively and doesn't only check if the input is divisible by 3 or 5, but by any number.
The array declared at the top is the value that will be printed to the console if the current number is divisible.
The denominator of the rational is the index of the element in the array + 1.

I.E. given the array [undefined, undefined, 'fizz', undefined, 'buzz'] the program would operated in the way you would expect of
a normal FizzBuzz program. This is because 'fizz' is at index 2, and thus for values divisble by (2 + 1) = 3 the program will print the vale of the element referenced by the index, 'fizz'.

## Functions

<dl>
<dt><a href="#checkEachValue">checkEachValue(primaryCounter, arrayOfValues, outputBuilder, arrayCounter)</a> ⇒</dt>
<dd><p>Iterates through the elements of the arrayOfValues comparing them to primaryCounter</p>
</dd>
<dt><a href="#fizzBuzzers">fizzBuzzers(primaryCounter, arrayOfValues, output)</a> ⇒</dt>
<dd><p>A recursive version of FizzBuzz that can use any number as the denominator and print any string</p>
</dd>
</dl>

<a name="checkEachValue"></a>

## checkEachValue(primaryCounter, arrayOfValues, outputBuilder, arrayCounter) ⇒
Iterates through the elements of the arrayOfValues comparing them to primaryCounter

**Kind**: global function

**Returns**: outputBuilder, a string that contains the result of the operations on primaryCounter

**Author**: Greg Hill

| Param | Description |
| --- | --- |
| primaryCounter | the current numerator in the FizzBuzz program |
| arrayOfValues | an array of strings and undefined elements used as a key |
| outputBuilder | a String used to build the result |
| arrayCounter | an index counter for the arrayOfValues |

<a name="fizzBuzzers"></a>

## fizzBuzzers(primaryCounter, arrayOfValues, output) ⇒
A recursive version of FizzBuzz that can use any number as the denominator and print any string

**Kind**: global function

**Returns**: a formatted string containing the result of the FizzBuzz operations

**Author**: Greg Hill

| Param | Description |
| --- | --- |
| primaryCounter | the number of times the function runs |
| arrayOfValues | an array of strings and undefined elements used as a key |
| output | the result of the function in the form of a String |
