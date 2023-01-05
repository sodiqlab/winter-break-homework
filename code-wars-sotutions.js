// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
//1 
/*
What's happening ? In the first line a counter variable is initialized to hold the sum of the variables added within it. The second line then has a loop that ends at the number given. While looping it looks for values that are  either a divisble of 3 or 5 using modular. Everytime I find a value that fulfills this requirement, I add it to the count. I then later return the count.
*/
function solution(number){
  let count = 0;
  for(let i=0; i<number.length;i++){
    if(i %3 ===0 || i%5===0){
      count += i;
    }
  }
  return count;
}
console.log(solution(23));

//2
function likes(names) {
  // TODO
    if(names.length===0){
      return 'no one likes this' ;
    }else if (names.length<=1){
      return `${names[0]} likes this`;
    }else if (names.length===2){
      return `${names[0]} and ${names[1]} like this`;
    }else if (names.length===3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }else{
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    }
  }

/*
I used if statements, and the length of the array given to us to come up with different case scenarios that would solve the cases. Essentially, if the case meets the given case it would execute in a way that allows the names to be filled in a social media format. Up until 3 theres pretty much an ading of the variables, but for more than 3 we began to add the first 2 of the array then give the remainder of the length of the array -2.
*/

//3
function findUniq(arr) {
  // do magic
  let obj= {}
  for(let char of arr){
    if(char in obj){
      obj[char]++
    }else {
      obj[char]= 1
    }
}
  
for(let chars in obj)
  if(obj[chars] ==1){
    return Number(chars)
  }
}
/*
First i created an obj. Then I would add each element of the array into the obj, to see how many times it was repeated. This is called a frequency counter. Later on in the code I searched the obj for a key value pair that had a value of 1 and returned that value since it was unique as a result of never repeating within the array.
*/

function findOutlier(integers){
  //your code here
  let even=[];
  let odd= [];
  if (integers.length>=3){
    for(let i=0;i<integers.length;i++){
      if (integers[i] %2===0){
        even.push(integers[i]);
      }else {
        odd.push(integers[i]);
      }
    }
  }
  if (even.length===1){
    return even[0];
  }else {
    return odd[0];
  }
}

/*
Created two arrays. One even , one odd. I then created a for loop that pushed the values that fit each, so if the value of the arr was divisble by 2 I pushed it into even. Else , I pushed it into the odd. I then created a conditional statement that would return the value of whichever array had a length of 1. This is because the question informed us that their would only be one outlier in terms of odd or even numbers.
*/

function duplicateCount(text){
  //...
  let str = text.toLowerCase();
  let freq= {};
  let count= 0;
  for(let char of str){
    if(char in freq){
      freq[char] ++;
     if (freq[char]=== 2){
       count ++;
     } 
    }else{
      freq[char] = 1;
    }
  }
  return count;
}

/*
First line is created to avoid any problems that may occur with having the same letter but different cases. This line accomplishes making the text case insensitive. I then create a frequency counter that will count the instances of each character in my string. My if condition that resides in the object basically says that if at any point , any instance of the char in the object has a value of 2. Add 1 to the count. The reasoning for that being we are counting the amount of duplicated in the str. Finally we return the count to have a value to work with.
*/
function moveZeros(arr) {
  let arrs=[];
  let count= 0;
  for (let i=0;i<arr.length;i++){
    if (arr[i]=== 0){
      count++;
    }else{
      arrs.push(arr[i]);
    } 
  }
  if (count >0){
for(let i=1; i <=count; i++){
  arrs.push(0);
}  
}
   return arrs;
}

/*
For this question I created an array and a count. The count would give me the amount of zeroes I had. The first for loop was created with two conditions. One of the conditions being to add all the other elements that were not zero to the empty array. The other adding to the count, that was counting the number of zeroes we had. I then added the zeroes to the end of the array using a for loop that will .push the amount of zeroes our count had set. 
*/

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}


/*
In this function we are first creating an array with str.split and because of the ' ' in the split it is based on each word. This then allows us to return each element of the array with a .map. In the next line we store the first letter of the element we are currently on. Then we slice to remove the first letter, add the first letter that we stored to the end of the word we are currently on, and then lastly add the 'ay' as requested. After that we join in back together. This doesnt work for punctuation.
*/

function pigIt(str){
// split the string by each word
  // take the first index of each word in the array
  // add “ay” to the end of the first index in a variable
  // push it back to the end of the element
  let words = str.split(' ');
  let latinize = '';
  let pigArr = [];
  let regex = /[a-zA-Z]/g;
  for (let part of words){
    latinize = part[0] + 'ay';
    if (part.match(regex)){
      pigArr.push(part.substring(1).concat(latinize));
    } else {
      pigArr.push(part);
    }
  }
  return pigArr.join(' ');
}

/*
In this version of the code we first create an array. Then we create an empty string. With another empty array to hold the changed words. Below that we have our regex to find only letters. In the for of loop that we have below it, we are cycling through each word and setting our empty string = to the first letter+ ay. We then check if the current element matches the regex we have in place, ensuring its only letters. After that check si down we push the word that we have changed in. If its punctuation however that we are currently on in the loop it will not match the regex. As a result it will execute our else instead and push the current element straight to the array without making needless changes. After all is done, we return our created array with .join(' ') to make it a string
*/