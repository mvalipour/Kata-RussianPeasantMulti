# Kata Russian Peasant Multiplication
It is said that Russian peasants multiply using a most curious method, They start by writing the two numbers to be multiplied at the head of two columns. Then they repeatedly divide the number in the left column by two (dropping any remainder) and double the number in the right column, writing the two new numbers immediately below their predecessors, until the number in the left column is one. Then they cross out all rows where the number in the left column is even, and add the remaining numbers in the right column, which is the desired product. For instance, the product eighteen times twenty-three is found like this.

http://img.thedailywtf.com/images/200907/RussianPeasant.gif

Your challenge: write a function that multiplies two numbers using the Russian peasant algorithm. There is no language restriction, though anything on the esoteric language list will probably be ignored. Spoiler alert: the solution(s) will undoubtedly appear in the comments.

# This solution

Interesting facts: You can use bitwise operands to apply arithmetic operations on numbers. Which are faster and can be directly map to hardware single operations:

- `x >> 1` to divide by 2 without remainder
- `x << 1` to multiply by 2
- `x & 1` to check whether the number is odd

##Technologies

- nodejs
- underscore
- mocha
- chai

## Run

Install necessary packages:

```
npm install
```

and run!

```
node src/ 18 23
node src/ 18 23 --verbose
```

The latter will print the steps on the output:

```
-- initial steps:
{ left: 18, right: 23 }
{ left: 9, right: 46 }
{ left: 4, right: 92 }
{ left: 2, right: 184 }
{ left: 1, right: 368 }
-- pick odd pairs
{ left: 9, right: 46 }
{ left: 1, right: 368 }
-- sum up:
414
```

Both will print result:

```
Result:  414
```

## Test

Make sure you have mocha installed:

```
npm install -g mocha
```

and run tests:
```
mocha
```
