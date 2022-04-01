<!-- the fizzbuzz example
 -->

const fizzBuzz = (num) => {
  for(let i = 1; i <= num; i++ ) {
		if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log ("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(10)

#What are arrays?
- They are a data structure to store ordered collections.
- They are indexed from 0
- They manage the order of elements and have many methods.
- Can be created by a constructor or literal notation.

To declare an array,
```
let newArr = []
```
or 
```

```
*Array can be declared empty or declared with stuff inside of it. Whatever is inside of it is called an element.

**It is important to note that empty spaces shouldn't be left in an empty array because it will then no longer be empty and return undefined**

- The way you get stuff out of the array is by using its index.
For example;
```
let newArr = [Nile, Niger, Congo, Benue]
```
If we console.log newArr[1] it will print out Niger.

If we wanted to add a new element to replace Niger, we could do
```
newArr[1] = 'Limpopo'
``` 
and it would replace it.

- Arrays can also be entirely reassigned.

Exercise:

Create an array of movies with at least three movies
```
let movies = ['The Gladiator', 'The Bohemian Rhapsody', 'The Big Short', 'A fault in our stars'];
```
Using the array from above, store the first movie in a variable
```
let firstMovie = movies[0];
```

get the length of the original array and store it in a variable
```
lengthOfArray = movies.length;
```

Get the last element in the array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

```
let lastElement = movies[2];
```
To the second question, solution would not work. correct answer will be
```
let lastElement = movies[movies.length - 1]
```

# Array Iteration
Arrays can be looped through as well

```
let bestColors = ['green', 'blue', 'white', 'violet']
for (let i = 0; i < bestColors.length; i++) {
    console.log(bestColors[i])
}
```
The special type of loop to iterate through arrays is the **For Each** to do the same loop above
```
bestColors.forEach((x, i) => console.log(x))
```
forEach will run once for each element in the array and grab the element and the index.

- Second Exercise
1. Create an array of movie titles. Loop through the array and add each element to the h2.
```
let movieTitles = ['The Equalizer', 'Odyssey', 'The Lord of The Rings', 'The Matrix', 'The Hobbit', 'Central Intelligence']

movieTitles.forEach((x, i) => {
    document.querySelector('h2').innerText += movieTitles[i]
})
```

2. Create an array of numbers. Loop through the array and add three to each number and replace the old number

```
let nums = [25,70, 180];
nums.forEach((item, i) => {
    nums[i] = item + 3
})

console.log(nums)
```
3. Find the average of all the numbers from question two.

```
let sum = 0;
for (let i = 0; i < nums.length ; i++) {
    sum += nums[i]
}
let average = sum / nums.length
```

